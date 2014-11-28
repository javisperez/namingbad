(function () {
    var name = document.getElementById('name');
    var button = document.getElementById('go');
    var canvas = document.getElementById('canvas');
    var cx = canvas.getContext('2d');
    var sizer = document.getElementById('sizer');
    var result = document.getElementById('result');
    var img = new Image();
    img.src = 'q269.png';

    var elements = {
        "H": {
            "atomic_number": 1,
            "atomic_weight": 1.00794,
            "oxidation_states": "1, -1",
            "electronic_configuration": "1s¹"
        },
        "He": {
            "atomic_number": 2,
            "atomic_weight": 4.002602,
            "oxidation_states": "-",
            "electronic_configuration": "1s²"
        },
        "Li": {
            "atomic_number": 3,
            "atomic_weight": 6.941,
            "oxidation_states": 1,
            "electronic_configuration": "[He]2s¹"
        },
        "Be": {
            "atomic_number": 4,
            "atomic_weight": 9.01218,
            "oxidation_states": 2,
            "electronic_configuration": "[He]2s²"
        },
        "B": {
            "atomic_number": 5,
            "atomic_weight": 10.811,
            "oxidation_states": 3,
            "electronic_configuration": "[He]2s²2p¹"
        },
        "C": {
            "atomic_number": 6,
            "atomic_weight": 12.011,
            "oxidation_states": "4, 2, -4",
            "electronic_configuration": "[He]2s²2p²"
        },
        "N": {
            "atomic_number": 7,
            "atomic_weight": 14.00674,
            "oxidation_states": "5, 4, 3, 2, -3",
            "electronic_configuration": "[He]2s²2p³"
        },
        "O": {
            "atomic_number": 8,
            "atomic_weight": 15.9994,
            "oxidation_states": "-2, -1",
            "electronic_configuration": "[He]2s²2p"
        },
        "F": {
            "atomic_number": 9,
            "atomic_weight": 18.998403,
            "oxidation_states": -1,
            "electronic_configuration": "[He]2s²2p"
        },
        "Ne": {
            "atomic_number": 10,
            "atomic_weight": 20.1797,
            "oxidation_states": "-",
            "electronic_configuration": "[He]2s²2p"
        },
        "Na": {
            "atomic_number": 11,
            "atomic_weight": 22.989768,
            "oxidation_states": 1,
            "electronic_configuration": "[Ne]3s¹"
        },
        "Mg": {
            "atomic_number": 12,
            "atomic_weight": 24.305,
            "oxidation_states": 2,
            "electronic_configuration": "[Ne]3s²"
        },
        "Al": {
            "atomic_number": 13,
            "atomic_weight": 26.981539,
            "oxidation_states": 3,
            "electronic_configuration": "[Ne]3s²3p¹"
        },
        "Si": {
            "atomic_number": 14,
            "atomic_weight": 28.0855,
            "oxidation_states": "4, -4",
            "electronic_configuration": "[Ne]3s²3p²"
        },
        "P": {
            "atomic_number": 15,
            "atomic_weight": 30.973762,
            "oxidation_states": "5, 3, -3",
            "electronic_configuration": "[Ne]3s²3p³"
        },
        "S": {
            "atomic_number": 16,
            "atomic_weight": 32.066,
            "oxidation_states": "6, 4, 2, -2",
            "electronic_configuration": "[Ne]3s²3p"
        },
        "Cl": {
            "atomic_number": 17,
            "atomic_weight": 35.4527,
            "oxidation_states": "7, 5, 3, 1, -1",
            "electronic_configuration": "[Ne]3s²3p"
        },
        "Ar": {
            "atomic_number": 18,
            "atomic_weight": 39.948,
            "oxidation_states": "-",
            "electronic_configuration": "[Ne]3s²3p"
        },
        "K": {
            "atomic_number": 19,
            "atomic_weight": 39.0983,
            "oxidation_states": 1,
            "electronic_configuration": "[Ar]4s¹"
        },
        "Ca": {
            "atomic_number": 20,
            "atomic_weight": 40.078,
            "oxidation_states": 2,
            "electronic_configuration": "[Ar]4s²"
        },
        "Sc": {
            "atomic_number": 21,
            "atomic_weight": 44.95591,
            "oxidation_states": 3,
            "electronic_configuration": "[Ar]3d¹4s²"
        },
        "Ti": {
            "atomic_number": 22,
            "atomic_weight": 47.88,
            "oxidation_states": "4, 3",
            "electronic_configuration": "[Ar]3d²4s²"
        },
        "V": {
            "atomic_number": 23,
            "atomic_weight": 50.9415,
            "oxidation_states": "5, 4, 3, 2, 0",
            "electronic_configuration": "[Ar]3d³4s²"
        },
        "Cr": {
            "atomic_number": 24,
            "atomic_weight": 51.9961,
            "oxidation_states": "6, 3, 2, 0",
            "electronic_configuration": "[Ar]3d4s¹"
        },
        "Mn": {
            "atomic_number": 25,
            "atomic_weight": 54.93805,
            "oxidation_states": "7, 6, 4, 3, 2, 0, -1",
            "electronic_configuration": "[Ar]3d4s²"
        },
        "Fe": {
            "atomic_number": 26,
            "atomic_weight": 55.847,
            "oxidation_states": "6, 3, 2, 0, -2",
            "electronic_configuration": "[Ar]3d4s²"
        },
        "Co": {
            "atomic_number": 27,
            "atomic_weight": 58.9332,
            "oxidation_states": "3, 2, 0, -1",
            "electronic_configuration": "[Ar]3d4s²"
        },
        "Ni": {
            "atomic_number": 28,
            "atomic_weight": 58.6934,
            "oxidation_states": "3, 2, 0",
            "electronic_configuration": "[Ar]3d4s²"
        },
        "Cu": {
            "atomic_number": 29,
            "atomic_weight": 63.546,
            "oxidation_states": "2, 1",
            "electronic_configuration": "[Ar]3d¹4s¹"
        },
        "Zn": {
            "atomic_number": 30,
            "atomic_weight": 65.39,
            "oxidation_states": 2,
            "electronic_configuration": "[Ar]3d¹4s²"
        },
        "Ga": {
            "atomic_number": 31,
            "atomic_weight": 69.723,
            "oxidation_states": 3,
            "electronic_configuration": "[Ar]3d¹4s²4p¹"
        },
        "Ge": {
            "atomic_number": 32,
            "atomic_weight": 72.61,
            "oxidation_states": 4,
            "electronic_configuration": "[Ar]3d¹4s²4p²"
        },
        "As": {
            "atomic_number": 33,
            "atomic_weight": 74.92159,
            "oxidation_states": "5, 3, -2",
            "electronic_configuration": "[Ar]3d¹4s²4p³"
        },
        "Se": {
            "atomic_number": 34,
            "atomic_weight": 78.96,
            "oxidation_states": "6, 4, -2",
            "electronic_configuration": "[Ar]3d¹4s²4p"
        },
        "Br": {
            "atomic_number": 35,
            "atomic_weight": 79.904,
            "oxidation_states": "7, 5, 3, 1, -1",
            "electronic_configuration": "[Ar]3d¹4s²4p"
        },
        "Kr": {
            "atomic_number": 36,
            "atomic_weight": 83.8,
            "oxidation_states": 2,
            "electronic_configuration": "[Ar]3d¹4s²4p"
        },
        "Rb": {
            "atomic_number": 37,
            "atomic_weight": 85.4678,
            "oxidation_states": 1,
            "electronic_configuration": "[Kr]5s¹"
        },
        "Sr": {
            "atomic_number": 38,
            "atomic_weight": 87.62,
            "oxidation_states": 2,
            "electronic_configuration": "[Kr]5s²"
        },
        "Y": {
            "atomic_number": 39,
            "atomic_weight": 88.90585,
            "oxidation_states": 3,
            "electronic_configuration": "[Kr]4d¹5s²"
        },
        "Zr": {
            "atomic_number": 40,
            "atomic_weight": 91.224,
            "oxidation_states": 4,
            "electronic_configuration": "[Kr]4d²5s²"
        },
        "Nb": {
            "atomic_number": 41,
            "atomic_weight": 92.90638,
            "oxidation_states": "5, 3",
            "electronic_configuration": "[Kr]4d5s¹"
        },
        "Mo": {
            "atomic_number": 42,
            "atomic_weight": 95.94,
            "oxidation_states": "6, 5, 4, 3, 2, 0",
            "electronic_configuration": "[Kr]4d5s¹"
        },
        "Tc": {
            "atomic_number": 43,
            "atomic_weight": 97.9072,
            "oxidation_states": 7,
            "electronic_configuration": "[Kr]4d5s¹"
        },
        "Ru": {
            "atomic_number": 44,
            "atomic_weight": 101.07,
            "oxidation_states": "8, 6, 4, 3, 2, 0, -2",
            "electronic_configuration": "[Kr]4d5s¹"
        },
        "Rh": {
            "atomic_number": 45,
            "atomic_weight": 102.9055,
            "oxidation_states": "5, 4, 3, 2, 1, 0",
            "electronic_configuration": "[Kr]4d5s¹"
        },
        "Pd": {
            "atomic_number": 46,
            "atomic_weight": 106.42,
            "oxidation_states": "4, 2, 0",
            "electronic_configuration": "[Kr]4d5s"
        },
        "Ag": {
            "atomic_number": 47,
            "atomic_weight": 107.8682,
            "oxidation_states": "2, 1",
            "electronic_configuration": "[Kr]4d5s¹"
        },
        "Cd": {
            "atomic_number": 48,
            "atomic_weight": 112.411,
            "oxidation_states": 2,
            "electronic_configuration": "[Kr]4d5s²"
        },
        "In": {
            "atomic_number": 49,
            "atomic_weight": 114.818,
            "oxidation_states": 3,
            "electronic_configuration": "[Kr]4d5s²5p¹"
        },
        "Sn": {
            "atomic_number": 50,
            "atomic_weight": 118.71,
            "oxidation_states": "4, 2",
            "electronic_configuration": "[Kr]4d5s²5p²"
        },
        "Sb": {
            "atomic_number": 51,
            "atomic_weight": 121.76,
            "oxidation_states": "5, 3, -2",
            "electronic_configuration": "[Kr]4d5s²5p³"
        },
        "Te": {
            "atomic_number": 52,
            "atomic_weight": 127.6,
            "oxidation_states": "6, 4, 2",
            "electronic_configuration": "[Kr]4d5s²5p"
        },
        "I": {
            "atomic_number": 53,
            "atomic_weight": 126.90447,
            "oxidation_states": "7, 5, 1, -1",
            "electronic_configuration": "[Kr]4d5s²5p"
        },
        "Xe": {
            "atomic_number": 54,
            "atomic_weight": 131.29,
            "oxidation_states": 7,
            "electronic_configuration": "[Kr]4d5s²5p"
        },
        "Cs": {
            "atomic_number": 55,
            "atomic_weight": 132.90543,
            "oxidation_states": 1,
            "electronic_configuration": "[Xe]6s¹"
        },
        "Ba": {
            "atomic_number": 56,
            "atomic_weight": 137.327,
            "oxidation_states": 2,
            "electronic_configuration": "[Xe]6s²"
        },
        "La": {
            "atomic_number": 57,
            "atomic_weight": 138.9055,
            "oxidation_states": 3,
            "electronic_configuration": "[Xe]6d¹6s²"
        },
        "Ce": {
            "atomic_number": 58,
            "atomic_weight": 140.115,
            "oxidation_states": "4, 3",
            "electronic_configuration": "[Xe]4f¹5d¹6s²"
        },
        "Pr": {
            "atomic_number": 59,
            "atomic_weight": 140.90765,
            "oxidation_states": "4, 3",
            "electronic_configuration": "[Xe]4f³5d6s²"
        },
        "Nd": {
            "atomic_number": 60,
            "atomic_weight": 144.24,
            "oxidation_states": 3,
            "electronic_configuration": "[Xe]4f5d6s²"
        },
        "Pm": {
            "atomic_number": 61,
            "atomic_weight": 144.9127,
            "oxidation_states": 3,
            "electronic_configuration": "[Xe]4f5d6s²"
        },
        "Sm": {
            "atomic_number": 62,
            "atomic_weight": 150.36,
            "oxidation_states": "3, 2",
            "electronic_configuration": "[Xe]4f5d6s²"
        },
        "Eu": {
            "atomic_number": 63,
            "atomic_weight": 151.965,
            "oxidation_states": "3, 2",
            "electronic_configuration": "[Xe]4f5d6s²"
        },
        "Gd": {
            "atomic_number": 64,
            "atomic_weight": 157.25,
            "oxidation_states": 3,
            "electronic_configuration": "[Xe]4f5d¹6s²"
        },
        "Tb": {
            "atomic_number": 65,
            "atomic_weight": 158.92534,
            "oxidation_states": "4, 3",
            "electronic_configuration": "[Xe]4f5d6s²"
        },
        "Dy": {
            "atomic_number": 66,
            "atomic_weight": 162.5,
            "oxidation_states": 3,
            "electronic_configuration": "[Xe]4f5d6s²"
        },
        "Ho": {
            "atomic_number": 67,
            "atomic_weight": 164.93032,
            "oxidation_states": 3,
            "electronic_configuration": "[Xe]4f¹¹5d6s²"
        },
        "Er": {
            "atomic_number": 68,
            "atomic_weight": 167.26,
            "oxidation_states": 3,
            "electronic_configuration": "[Xe]4f¹²5d6s²"
        },
        "Tm": {
            "atomic_number": 69,
            "atomic_weight": 168.93421,
            "oxidation_states": "3, 2",
            "electronic_configuration": "[Xe]4f¹³5d6s²"
        },
        "Yb": {
            "atomic_number": 70,
            "atomic_weight": 173.04,
            "oxidation_states": "3, 2",
            "electronic_configuration": "[Xe]4f¹5d¹6s²"
        },
        "Lu": {
            "atomic_number": 71,
            "atomic_weight": 174.967,
            "oxidation_states": 3,
            "electronic_configuration": "[Xe]4f¹5d¹6s²"
        },
        "Hf": {
            "atomic_number": 72,
            "atomic_weight": 178.49,
            "oxidation_states": 4,
            "electronic_configuration": "[Xe]4f¹5d²6s²"
        },
        "Ta": {
            "atomic_number": 73,
            "atomic_weight": 180.9479,
            "oxidation_states": 5,
            "electronic_configuration": "[Xe]4f¹5d³6s²"
        },
        "W": {
            "atomic_number": 74,
            "atomic_weight": 183.84,
            "oxidation_states": "6, 5, 4, 3, 2, 0",
            "electronic_configuration": "[Xe]4f¹5d6s²"
        },
        "Re": {
            "atomic_number": 75,
            "atomic_weight": 186.207,
            "oxidation_states": "5, 4, 3, 2, -1",
            "electronic_configuration": "[Xe]4f¹5d6s²"
        },
        "Os": {
            "atomic_number": 76,
            "atomic_weight": 190.23,
            "oxidation_states": "8, 6, 4, 3, 2, 0, -2",
            "electronic_configuration": "[Xe]4f¹5d6s²"
        },
        "Ir": {
            "atomic_number": 77,
            "atomic_weight": 192.22,
            "oxidation_states": "6, 4, 3, 2, 1, 0, -1",
            "electronic_configuration": "[Xe]4f¹5d6s²"
        },
        "Pt": {
            "atomic_number": 78,
            "atomic_weight": 195.08,
            "oxidation_states": "4, 2, 0",
            "electronic_configuration": "[Xe]4f¹5d6s²"
        },
        "Au": {
            "atomic_number": 79,
            "atomic_weight": 196.96654,
            "oxidation_states": "3, 1",
            "electronic_configuration": "[Xe]4f¹5d¹6s²"
        },
        "Hg": {
            "atomic_number": 80,
            "atomic_weight": 200.59,
            "oxidation_states": "2, 1",
            "electronic_configuration": "[Xe]4f¹5d¹6s²"
        },
        "Tl": {
            "atomic_number": 81,
            "atomic_weight": 204.3833,
            "oxidation_states": "3, 1",
            "electronic_configuration": "[Xe]4f¹5d¹6s²6p¹"
        },
        "Pb": {
            "atomic_number": 82,
            "atomic_weight": 207.2,
            "oxidation_states": "4, 2",
            "electronic_configuration": "[Xe]4f¹5d¹6s²6p²"
        },
        "Bi": {
            "atomic_number": 83,
            "atomic_weight": 208.98037,
            "oxidation_states": "5, 3",
            "electronic_configuration": "[Xe]4f¹5d¹6s²6p³"
        },
        "Po": {
            "atomic_number": 84,
            "atomic_weight": 208.9824,
            "oxidation_states": "6, 4, 2",
            "electronic_configuration": "[Xe]4f¹5d¹6s²6p"
        },
        "At": {
            "atomic_number": 85,
            "atomic_weight": 209.9871,
            "oxidation_states": "7, 5, 3, 1, -1",
            "electronic_configuration": "[Xe]4f¹5d¹6s²6p"
        },
        "Rn": {
            "atomic_number": 86,
            "atomic_weight": 222.0176,
            "oxidation_states": "-",
            "electronic_configuration": "[Xe]4f¹5d¹6s²6p"
        },
        "Fr": {
            "atomic_number": 87,
            "atomic_weight": 223.0197,
            "oxidation_states": 2,
            "electronic_configuration": "[Rn]7s¹"
        },
        "Ra": {
            "atomic_number": 88,
            "atomic_weight": 226.0254,
            "oxidation_states": 2,
            "electronic_configuration": "[Rn]7s²"
        },
        "Ac": {
            "atomic_number": 89,
            "atomic_weight": 227.0278,
            "oxidation_states": 3,
            "electronic_configuration": "[Rn]6d¹7s²"
        },
        "Th": {
            "atomic_number": 90,
            "atomic_weight": 232.0381,
            "oxidation_states": 4,
            "electronic_configuration": "[Rn]5f6d¹7s²"
        },
        "Pa": {
            "atomic_number": 91,
            "atomic_weight": 231.03588,
            "oxidation_states": "5, 4",
            "electronic_configuration": "[Rn]5f²6d¹7s²"
        },
        "U": {
            "atomic_number": 92,
            "atomic_weight": 238.0289,
            "oxidation_states": "6, 5, 4, 3",
            "electronic_configuration": "[Rn]5f³6d¹7s²"
        },
        "Np": {
            "atomic_number": 93,
            "atomic_weight": 237.048,
            "oxidation_states": "6, 5, 4, 3",
            "electronic_configuration": "[Rn]5f6d¹7s²"
        },
        "Pu": {
            "atomic_number": 94,
            "atomic_weight": 244.0642,
            "oxidation_states": "6, 5, 4, 3",
            "electronic_configuration": "[Rn]5f6d7s²"
        },
        "Am": {
            "atomic_number": 95,
            "atomic_weight": 243.0614,
            "oxidation_states": "6, 5, 4, 3",
            "electronic_configuration": "[Rn]5f6d7s²"
        },
        "Cm": {
            "atomic_number": 96,
            "atomic_weight": 247.0703,
            "oxidation_states": "4, 3",
            "electronic_configuration": "[Rn]5f6d¹7s²"
        },
        "Bk": {
            "atomic_number": 97,
            "atomic_weight": 247.0703,
            "oxidation_states": "4, 3",
            "electronic_configuration": "[Rn]5f6d7s²"
        },
        "Cf": {
            "atomic_number": 98,
            "atomic_weight": 251.0796,
            "oxidation_states": "4, 3",
            "electronic_configuration": "[Rn]5f¹6d7s²"
        },
        "Es": {
            "atomic_number": 99,
            "atomic_weight": 252.083,
            "oxidation_states": 3,
            "electronic_configuration": "[Rn]5f¹¹6d7s²"
        },
        "Fm": {
            "atomic_number": 100,
            "atomic_weight": 257.0951,
            "oxidation_states": 3,
            "electronic_configuration": "[Rn]5f¹²6d7s²"
        },
        "Md": {
            "atomic_number": 101,
            "atomic_weight": 258.1,
            "oxidation_states": 3,
            "electronic_configuration": "[Rn]5f¹³6d7s²"
        },
        "No": {
            "atomic_number": 102,
            "atomic_weight": 259.1009,
            "oxidation_states": "3,2",
            "electronic_configuration": "[Rn]5f¹6d7s²"
        },
        "Lr": {
            "atomic_number": 103,
            "atomic_weight": 262.11,
            "oxidation_states": 3,
            "electronic_configuration": "[Rn]5f¹6d¹7s²"
        },
        "Rf": {
            "atomic_number": 104,
            "atomic_weight": "[261]",
            "oxidation_states": "-",
            "electronic_configuration": "[Rn]5f¹6d²7s²"
        },
        "Db": {
            "atomic_number": 105,
            "atomic_weight": "[262]",
            "oxidation_states": "-",
            "electronic_configuration": "[Rn]5f¹6d³6s²"
        },
        "Sg": {
            "atomic_number": 106,
            "atomic_weight": "[266]",
            "oxidation_states": "-",
            "electronic_configuration": "[Rn]5f¹6d¹7s²"
        },
        "Bh": {
            "atomic_number": 107,
            "atomic_weight": "[264]",
            "oxidation_states": "n/a",
            "electronic_configuration": "n/a"
        },
        "Hs": {
            "atomic_number": 108,
            "atomic_weight": "[269]",
            "oxidation_states": "n/a",
            "electronic_configuration": "n/a"
        },
        "Mt": {
            "atomic_number": 109,
            "atomic_weight": "[268]",
            "oxidation_states": "n/a",
            "electronic_configuration": "n/a"
        },
        "Uun": {
            "atomic_number": 110,
            "atomic_weight": "[269]",
            "oxidation_states": "n/a",
            "electronic_configuration": "n/a"
        },
        "Uuu": {
            "atomic_number": 111,
            "atomic_weight": "[272]",
            "oxidation_states": "n/a",
            "electronic_configuration": "n/a"
        },
        "Uub": {
            "atomic_number": 112,
            "atomic_weight": "[277]",
            "oxidation_states": "n/a",
            "electronic_configuration": "n/a"
        },
        "Uut": {
            "atomic_number": 113,
            "atomic_weight": "n/a",
            "oxidation_states": "n/a",
            "electronic_configuration": "n/a"
        },
        "Uuq": {
            "atomic_number": 114,
            "atomic_weight": "[289]",
            "oxidation_states": "n/a",
            "electronic_configuration": "n/a"
        },
        "Uup": {
            "atomic_number": 115,
            "atomic_weight": "n/a",
            "oxidation_states": "n/a",
            "electronic_configuration": "n/a"
        },
        "Uuh": {
            "atomic_number": 116,
            "atomic_weight": "n/a",
            "oxidation_states": "n/a",
            "electronic_configuration": "n/a"
        },
        "Uus": {
            "atomic_number": 117,
            "atomic_weight": "n/a",
            "oxidation_states": "n/a",
            "electronic_configuration": "n/a"
        },
        "Uuo": {
            "atomic_number": 118,
            "atomic_weight": "n/a",
            "oxidation_states": "n/a",
            "electronic_configuration": "n/a"
        }
    };

    var founds = [];
    var texts = [];
    var order = [2, 1, 3];

    button.onclick = render;

    function render() {
        founds = [];
        texts = [];

        if (name.value.length == 0) {
            return;
        }

        var value = name.value.toLowerCase();

        var words = value.split(' ');

        for (var j = 0, l = words.length; j < l; j++) {

            var word = normalize(words[j]);

            for (var i = 0, k = order.length; i < k; i++) {

                var f = search(word, order[i]);

                if (f > -1) {
                    founds.push({element: word.substr(f, order[i]), position: f});
                    texts.push(word.replace(word.substr(f, order[i]), '|:_:|'));

                    break;
                }
            }
        }

        if (founds.length > 0) {
            draw(texts, founds);
        } else {
            alert('There\'s no element in the periodic table that we can use with that name, sorry :(');
        }

        document.getElementById('final-result').style.display = 'block';
        setTimeout(function(){
            addClass(document.getElementById('final-result'), 'show');
        }, 100);
    };
    
    document.getElementById('close').addEventListener('click', function(){
        removeClass(document.getElementById('final-result'), 'show');
        setTimeout(function(){
            document.getElementById('final-result').style.display = 'none';
        }, 100);
    });
    
    name.addEventListener('keyup', function(e){
        var key = e.which || window.event;
        
        if(key == 13) {
            render();
        }
    });
    
    function addClass(el, className) {
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += ' ' + className;
        }
    }

    function removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className -= className;
        }
    }

    // texts and founds
    function draw(texts, founds) {
        canvas.width = 800;
//        cx.fillStyle = 'transparent';
//        cx.fillRect(0, 0, canvas.width, canvas.height);

        var line = 1;
        var hasElement = false;
        var previousElementX = 0;
        var position = {x: 60, y: 120};
        var element = {x: 0, y: 0};

        // loop all the words
        for (var word in texts) {
            var chunks = texts[word].split('|:_:|');

            position.x = 60;
            hasElement = false;

            // loop all the chunks of the current word
            for (var chunk in chunks) {
                var text = chunks[chunk];

                // capitalize
                if (chunk == 0 && founds[word].position > 0) {
                    text = text.toLowerCase();
                }

                // get font width in pixels
                var width = getTextWidth(chunks[chunk], {fontFamily: 'heart_breaking_badregular', fontSize: '120px'});

                // position the elements
                if (!hasElement) {
                    element.x = previousElementX + position.x + width;

                    if (line > 1) {
                        element.x = previousElementX + 140;
                    }

                    drawElement(founds[word], element.x, position.y);
                    hasElement = true;
                }

                // On the first line, everything should be pretty good, as its the base of the others lines
                if (line == 1) {
                    if (founds[word].position == 0) {
                        position.x += 72;
                    } else {
                        if (chunk == 0) {
                            position.x = element.x - 8;
                        } else {
                            position.x = element.x + 136;
                        }
                    }

                } else

                // if we are on another line bigger than 1, then depend on previous element position
                if (line > 1) {
                    position.x = previousElementX + 140;

                    // if we're on chunk 0, move to the left
                    if (chunk == 0) {
                        position.x -= 10; // padding can't be used
                    } else
                    if (chunk == 1) {
                        position.x += 134;
                    }
                }

                cx.textAlign = 'left';

                if (chunk == 0) {
                    cx.textAlign = 'right';
                }

                cx.fillStyle = '#FFF';
                cx.font = '130px "heart_breaking_badregular" bold';
                cx.fillText(text, position.x, position.y + 20);
            }

            previousElementX = element.x;
            line++;

            position.y += 140;

        }

        result.src = canvas.toDataURL("image/png");
    }

    function drawElement(object, x, y) {
        object.element = capitalize(trim(object.element));

        var size = 140;
        var w = getTextWidth(object.element, {fontFamily: 'heart_breaking_badregular', fontSize: '80px'});

        var nx = x + ((size - w) / 2);

        cx.save();

        cx.drawImage(img, x - 8, y - 95);

        cx.fillStyle = '#FFF';
        cx.font = 'bold 80px sans-serif';
        cx.fillText(object.element, nx, y);

        // atomic number
        cx.font = 'bold 21px sans-serif';
        cx.fillText(elements[object.element].atomic_number, x, y + 20);

        // atomic weight
        cx.font = 'bold 12px sans-serif';
        cx.fillText(elements[object.element].atomic_weight, x, y - 73);

        // configuration
        cx.fillText(elements[object.element].electronic_configuration, x, y + 35);

        // oxidation states
        var os = elements[object.element].oxidation_states;
        os = os.toString().split(',');
        var l = os.length;
        osY = y - 73;

        if (l > 4) {
            os.splice(0, l - 4);
            l = os.length;
        }

        cx.textAlign = 'right';

        while (l--) {
            var o = trim(os[l]);

            if (o.indexOf('-') == -1 && o != '0') {
                o = '+' + o;
            }

            cx.fillText(o, x + 126, osY);
            osY += 14;
        }

        cx.restore();
    }

    function search(str, len) {

        len = len || 2;

        var i = str.length;
        var found = -1;
        for (var i = 0, l = str.length; i < l; i++) {
            var c = str[i].toUpperCase();

            if (len > 1 && i < l - 1) {
                c += str[i + 1].toLowerCase();
            }

            if (len > 2 && i < l - 2) {
                c += str[i + 2].toLowerCase();
            }

            if (elements[c]) {
                found = i;
                break;
            }
        }

        return found;
    }

    function getTextWidth(text, options) {
        sizer.style.fontFamily = options.fontFamily || 'heart_breaking_badregular';
        sizer.style.fontSize = options.fontSize || '120px';
        sizer.innerHTML = text;
        return sizer.clientWidth + 10;
    }

    function capitalize(string) {
        return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);
    }

    function trim(string) {
        return string.replace(/^\s+|\s+$/g, '');
    }

    function normalize(str) {
        var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",
              to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
         mapping = {};

        for (var i = 0, j = from.length; i < j; i++) {
            mapping[ from.charAt(i) ] = to.charAt(i);
        }

        var ret = [];
        for (var i = 0, j = str.length; i < j; i++) {
            var c = str.charAt(i);
            if (mapping.hasOwnProperty(str.charAt(i)))
                ret.push(mapping[ c ]);
            else
                ret.push(c);
        }
        return ret.join('');
    }

    // bug fix
    cx.fillStyle = '#FFF';
    cx.font = '130px "heart_breaking_badregular" bold';
    cx.fillText('Naming Bad', 0, 0);
    
    name.focus();
})();
