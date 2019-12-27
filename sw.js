/* eslint-disable no-console */
/* eslint-disable no-undef */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  console.log('Yay! Workbox is loaded 🎉');
  workbox.precaching.precacheAndRoute([
  {
    "url": "about.html",
    "revision": "5220df2cfb9e0121698474b9347365e9"
  },
  {
    "url": "asset-manifest.json",
    "revision": "c155fee643169788f12e0d9ec8efbb20"
  },
  {
    "url": "assets/css/black-dashboard.css",
    "revision": "892505c275d23bce0f5cd61097f970c9"
  },
  {
    "url": "assets/css/black-dashboard.min.css",
    "revision": "4f154852f21135557dc3c9da5c7efb65"
  },
  {
    "url": "assets/css/blk-design-system.css",
    "revision": "c266b3417b2498990092a2c52dd1acad"
  },
  {
    "url": "assets/css/blk-design-system.min.css",
    "revision": "13a4bc8c86908c3bad061d3487679bf6"
  },
  {
    "url": "assets/css/loading.css",
    "revision": "1700dcfe27055c374a6a74fb15919e9a"
  },
  {
    "url": "assets/css/main.css",
    "revision": "5cd9a61fb24ba1590367e3651f5b11ba"
  },
  {
    "url": "assets/css/nucleo-icons.css",
    "revision": "04301b91e6326e18f98665641657e2ee"
  },
  {
    "url": "assets/css/owl.carousel.css",
    "revision": "c8322bd5bffc8e2856f2cbcd03c61d18"
  },
  {
    "url": "assets/css/owl.carousel.min.css",
    "revision": "b2752a850d44f50036628eeaef3bfcfa"
  },
  {
    "url": "assets/css/owl.theme.default.css",
    "revision": "6c830c91a0a08fca0fe883504abc7d2b"
  },
  {
    "url": "assets/css/owl.theme.default.min.css",
    "revision": "594b81805a98b267e47c70a8fad30d9f"
  },
  {
    "url": "assets/css/owl.theme.green.css",
    "revision": "03d89ce5e541aef55bfdd5d6bad841fb"
  },
  {
    "url": "assets/css/owl.theme.green.min.css",
    "revision": "e3f6d629d0e68d452af2380f287981b4"
  },
  {
    "url": "assets/fonts/nucleo.eot",
    "revision": "03ef1918e505c3e3471f9369ef7a638f"
  },
  {
    "url": "assets/fonts/nucleo.ttf",
    "revision": "b17a118e13e53558658b681a0ebdad82"
  },
  {
    "url": "assets/fonts/nucleo.woff",
    "revision": "f0b489a5dbbff08833d21024f9fcbd4e"
  },
  {
    "url": "assets/fonts/nucleo.woff2",
    "revision": "5987dd12fea78ce5f97ae601b08ec03c"
  },
  {
    "url": "assets/img/anime3.jpg",
    "revision": "093c0af1e16b75f0534993afe95d9c37"
  },
  {
    "url": "assets/img/anime3.webp",
    "revision": "b02c505de751c5acf7622119ca201785"
  },
  {
    "url": "assets/img/anime6.jpg",
    "revision": "67745e1f902dcee908cd71139945ef71"
  },
  {
    "url": "assets/img/apple-icon.png",
    "revision": "2bcbca19fdf288860939e78ac592b82c"
  },
  {
    "url": "assets/img/bg5.jpg",
    "revision": "056eb0586182a8d28273ad11c028e912"
  },
  {
    "url": "assets/img/bitcoin.jpg",
    "revision": "f9511f9790fdd3dec087aa0274cc5b4e"
  },
  {
    "url": "assets/img/blob.jpg",
    "revision": "06993bf1e67ae8482296fa4c32ff757c"
  },
  {
    "url": "assets/img/burger.svg",
    "revision": "e43e836270428343e29b16b89fef46c6"
  },
  {
    "url": "assets/img/camera.jpg",
    "revision": "c537b6ea5a07e643a34d03f7041aa31a"
  },
  {
    "url": "assets/img/camera.svg",
    "revision": "53853ae5f2b168b627bf208afd65b5a8"
  },
  {
    "url": "assets/img/cercuri.jpg",
    "revision": "b8c99fead59982d36083dc35a7fcc2dc"
  },
  {
    "url": "assets/img/chester-wade.jpg",
    "revision": "62a04e2688d8ba7ede0d823e425cf999"
  },
  {
    "url": "assets/img/default-avatar.jpg",
    "revision": "14d93e9223f17f3a51fad09370ed31b0"
  },
  {
    "url": "assets/img/denys.jpg",
    "revision": "2ae3f9ecc812ca146d952de9c8e8c0ba"
  },
  {
    "url": "assets/img/dots.jpg",
    "revision": "6ba92388f8b94c8599d720421f9f3a13"
  },
  {
    "url": "assets/img/dots.webp",
    "revision": "547f38e0dcf61baa550f925977e74108"
  },
  {
    "url": "assets/img/emilyz.jpg",
    "revision": "9fcf69e5359987c9b1545aae1c2c5faa"
  },
  {
    "url": "assets/img/etherum.jpg",
    "revision": "16d42d5ecccabd73b6eca2e3108e7cca"
  },
  {
    "url": "assets/img/fabien-bazanegue.jpg",
    "revision": "182796a27d309b897e77f616df128522"
  },
  {
    "url": "assets/img/fast_food/img-0.jpg",
    "revision": "b35d879f2a211af331e6c57417cc9800"
  },
  {
    "url": "assets/img/fast_food/img-1.jpg",
    "revision": "ccef08007ed7770f2eaa9b89b8792970"
  },
  {
    "url": "assets/img/fast_food/img-2.jpg",
    "revision": "b09301c4a7dcfe72602a6e862194b560"
  },
  {
    "url": "assets/img/fast_food/img-3.jpg",
    "revision": "f32030ea416fdaeb19a95e9d00e27029"
  },
  {
    "url": "assets/img/fast_food/img-4.jpg",
    "revision": "9c33ae67a10cb73f8455462b7b064a52"
  },
  {
    "url": "assets/img/fast_food/img-5.jpg",
    "revision": "85b2a995f04116fe5a9fb3bc7d91edbf"
  },
  {
    "url": "assets/img/fast_food/img-6.jpg",
    "revision": "011fc30c884bbb25312fc014c6d03b75"
  },
  {
    "url": "assets/img/fast_food/img-7.jpg",
    "revision": "006fcf6d45f6ec9a2568f38090837c44"
  },
  {
    "url": "assets/img/fast_food/img-8.jpg",
    "revision": "c13e9e1467a4c150ab44a31f2695ffab"
  },
  {
    "url": "assets/img/fast_food/img-9.jpg",
    "revision": "8748a87d82587dcd02b919fabac29501"
  },
  {
    "url": "assets/img/favicon.png",
    "revision": "2bcbca19fdf288860939e78ac592b82c"
  },
  {
    "url": "assets/img/favicon.webp",
    "revision": "f0ac353d0130aabbdc0f484f491c15b4"
  },
  {
    "url": "assets/img/foreign_desserts/img-0.jpg",
    "revision": "d73bcdd2b0a9d643628f2143d8c7b2d2"
  },
  {
    "url": "assets/img/foreign_desserts/img-1.jpg",
    "revision": "ef7f8cc0c7bc843e8190931d93aa855c"
  },
  {
    "url": "assets/img/foreign_desserts/img-2.jpg",
    "revision": "ce1721c9182c795f1175f168e6726080"
  },
  {
    "url": "assets/img/foreign_desserts/img-3.jpg",
    "revision": "0cee1a15a81a49b2cba800611c4ad4e6"
  },
  {
    "url": "assets/img/foreign_desserts/img-4.jpg",
    "revision": "dc405cf3a9ceaca0e08853b14d8a218f"
  },
  {
    "url": "assets/img/foreign_desserts/img-5.jpg",
    "revision": "0e68ad190a58099ad05c1b0ed15d8d4f"
  },
  {
    "url": "assets/img/foreign_desserts/img-6.jpg",
    "revision": "a57e1a2ab1081b422648ec840a71403d"
  },
  {
    "url": "assets/img/foreign_desserts/img-7.jpg",
    "revision": "2f4e3006befe7b2b8daa995280f2b0f9"
  },
  {
    "url": "assets/img/foreign_desserts/img-8.jpg",
    "revision": "449403648a1dedc068b57a0e7582ab49"
  },
  {
    "url": "assets/img/foreign_desserts/img-9.jpg",
    "revision": "357b7bcf2dc276225c1778ad91abed26"
  },
  {
    "url": "assets/img/github.svg",
    "revision": "4ffd4fe7945af123788bf5888296c696"
  },
  {
    "url": "assets/img/google.svg",
    "revision": "87be59a1f7061fc6021876aad6fee028"
  },
  {
    "url": "assets/img/grp-images/bot.svg",
    "revision": "93d043cef33ebc274c74b505321dfc63"
  },
  {
    "url": "assets/img/grp-images/desert.svg",
    "revision": "5386c918d9a9acaea3ef76c6ecbf2855"
  },
  {
    "url": "assets/img/grp-images/fast-food.svg",
    "revision": "32a07a519fba509c89f8ac3c5aa532a8"
  },
  {
    "url": "assets/img/grp-images/indian food.svg",
    "revision": "61848c4b84a3cb598d3484b85b5ce627"
  },
  {
    "url": "assets/img/grp-images/indian sweet.svg",
    "revision": "67ede9161c297c750f34eafbabd72e99"
  },
  {
    "url": "assets/img/grp-images/italian.svg",
    "revision": "d6468b0332f83459c4e0cf5caf4f48da"
  },
  {
    "url": "assets/img/header.jpg",
    "revision": "44274a4597a19a5a5ec4c32258e04f25"
  },
  {
    "url": "assets/img/ice-cream.svg",
    "revision": "a67b75f4b6bf596a4ec2ec75ec0293cf"
  },
  {
    "url": "assets/img/ice-tea.svg",
    "revision": "5c5c2c047529785df683bbce8a0bea0c"
  },
  {
    "url": "assets/img/img_3115.jpg",
    "revision": "3d7877573fa2e000833bda3178bad821"
  },
  {
    "url": "assets/img/indian_desserts/img-0.jpg",
    "revision": "b26d799c8bc5f0302ccae06c71fe42b4"
  },
  {
    "url": "assets/img/indian_desserts/img-1.jpg",
    "revision": "f3664242367a6a48a25bb31fab479572"
  },
  {
    "url": "assets/img/indian_desserts/img-2.jpg",
    "revision": "55bac88525c29bc8c7aa8edfedf3d9be"
  },
  {
    "url": "assets/img/indian_desserts/img-3.jpg",
    "revision": "ee371e07d6f1f392bd7ddfcbbda2a27e"
  },
  {
    "url": "assets/img/indian_desserts/img-4.jpg",
    "revision": "df0bc0380485f33978dac981f9e032c2"
  },
  {
    "url": "assets/img/indian_desserts/img-5.jpg",
    "revision": "c8038a6cc3f4f142143701935aee859f"
  },
  {
    "url": "assets/img/indian_desserts/img-6.jpg",
    "revision": "3bdfc9fadd2f6371c35571b0ebc77cbb"
  },
  {
    "url": "assets/img/indian_desserts/img-7.jpg",
    "revision": "7993bde358fca5b58f28439e831ddf0e"
  },
  {
    "url": "assets/img/indian_desserts/img-8.jpg",
    "revision": "4156ee1780b395a90ec5740c0f7bd3c6"
  },
  {
    "url": "assets/img/indian_desserts/img-9.jpg",
    "revision": "b94d56e762600d61915e0af2d302a060"
  },
  {
    "url": "assets/img/indian_snacks/img-0.jpg",
    "revision": "5f3430870a7c0635ea638c49c0099526"
  },
  {
    "url": "assets/img/indian_snacks/img-1.jpg",
    "revision": "fa7e1ab14e6e30e817712448f1e49bac"
  },
  {
    "url": "assets/img/indian_snacks/img-2.jpg",
    "revision": "6315dacb2b2cbe14f178abdedab8ed13"
  },
  {
    "url": "assets/img/indian_snacks/img-3.jpg",
    "revision": "b8db5d6324651ed1845fc8663cb1d968"
  },
  {
    "url": "assets/img/indian_snacks/img-4.jpg",
    "revision": "5c228fd8dbfef0063bcf68f5308f0768"
  },
  {
    "url": "assets/img/indian_snacks/img-5.jpg",
    "revision": "c790160de9a8bacc8c6bbb2b0877c8da"
  },
  {
    "url": "assets/img/indian_snacks/img-6.jpg",
    "revision": "86d850887d69908b1fc65f77d54aa185"
  },
  {
    "url": "assets/img/indian_snacks/img-7.jpg",
    "revision": "844bf83533ce887b975a4e6c1edc9334"
  },
  {
    "url": "assets/img/indian_snacks/img-8.jpg",
    "revision": "6565abfa6532f738a65e8d052fbbea80"
  },
  {
    "url": "assets/img/indian_snacks/img-9.jpg",
    "revision": "232abf97116e8119d3a33479daf98a18"
  },
  {
    "url": "assets/img/italian_food/img-0.jpg",
    "revision": "4e190a805a03246543f5d442a726d966"
  },
  {
    "url": "assets/img/italian_food/img-1.jpg",
    "revision": "afe27f2dad4b0f9e7107f1ec32eab9dd"
  },
  {
    "url": "assets/img/italian_food/img-2.jpg",
    "revision": "ec2ccdc4382641c84bd0bad261379853"
  },
  {
    "url": "assets/img/italian_food/img-3.jpg",
    "revision": "c1fbe6e9ec388922494131d8f1c2864a"
  },
  {
    "url": "assets/img/italian_food/img-4.jpg",
    "revision": "9de493aa975f7b7d18e09b54c4de1241"
  },
  {
    "url": "assets/img/italian_food/img-5.jpg",
    "revision": "282eaf47bc865c7898863f7265cc6aaa"
  },
  {
    "url": "assets/img/italian_food/img-6.jpg",
    "revision": "a45a6b1a6e771746b390509187212633"
  },
  {
    "url": "assets/img/italian_food/img-7.jpg",
    "revision": "836e8ce6e108e36bcf858837e170d975"
  },
  {
    "url": "assets/img/italian_food/img-8.jpg",
    "revision": "31d722136c1b60c02c54ba7df1627c67"
  },
  {
    "url": "assets/img/italian_food/img-9.jpg",
    "revision": "8a3482c7ebf0d370edc0907a6d067c35"
  },
  {
    "url": "assets/img/james.jpg",
    "revision": "ddaf636676f8b04cdec8cdb40750277f"
  },
  {
    "url": "assets/img/julie.jpeg",
    "revision": "8f912d4eba0a9359251253d5fb33b603"
  },
  {
    "url": "assets/img/karan.jpg",
    "revision": "3d83c5b6fe497187773df8c0f1c20732"
  },
  {
    "url": "assets/img/landing-page.jpg",
    "revision": "2b4c72e1ef6d6adfd23fc981ff7a4668"
  },
  {
    "url": "assets/img/left-arrow.svg",
    "revision": "6468634d7642b247f4a6247b94d05553"
  },
  {
    "url": "assets/img/logo.jpg",
    "revision": "067c45140cd9bab2e9f48b2091fdac3c"
  },
  {
    "url": "assets/img/lora.jpg",
    "revision": "96764d80118b4ece734dc14401283b76"
  },
  {
    "url": "assets/img/main_1.jpg",
    "revision": "9b9474ae5c902ada71237ba50c172f12"
  },
  {
    "url": "assets/img/main_1.webp",
    "revision": "a4fbeb035a9a6b65be5824a53930a1cd"
  },
  {
    "url": "assets/img/main_2.jpg",
    "revision": "1b462117547a74884b9499219f0cad96"
  },
  {
    "url": "assets/img/main_2.webp",
    "revision": "360e01cbe3ee8bd79c6014330863426c"
  },
  {
    "url": "assets/img/main_3.jpg",
    "revision": "2a6cf2a8f03d3e6d89a3393383d8104d"
  },
  {
    "url": "assets/img/main_3.webp",
    "revision": "6cbc399288416ae5b5c22c7b0ebce4eb"
  },
  {
    "url": "assets/img/main_4.jpg",
    "revision": "082a1a9af00ca3be6ccb9916028d0b6b"
  },
  {
    "url": "assets/img/main_4.webp",
    "revision": "81eb52acd77dc98620c17c09ab740ca8"
  },
  {
    "url": "assets/img/mark-finn.jpg",
    "revision": "3a749d183532590fda1c14345b6ccca6"
  },
  {
    "url": "assets/img/mike.jpg",
    "revision": "be4a1748d0f94c35e0a661164495d160"
  },
  {
    "url": "assets/img/muffin.svg",
    "revision": "66ebd06a7c0960caafbc0fdd4be552e4"
  },
  {
    "url": "assets/img/noodles.svg",
    "revision": "970324d84d60c2e16df82b30653b6092"
  },
  {
    "url": "assets/img/nucleo-logo.svg",
    "revision": "92e7581ab14047afd5688bed0132b2c0"
  },
  {
    "url": "assets/img/nutrients_image.jpg",
    "revision": "ebd9ca2cd12c7dbdaec3becadcb73d20"
  },
  {
    "url": "assets/img/output.webm",
    "revision": "cbe07bafb605fd1f2b4aef56c9d8c448"
  },
  {
    "url": "assets/img/path1.jpg",
    "revision": "728066e31b2c7c2cf8d3f2c4d0aa8063"
  },
  {
    "url": "assets/img/path2.jpg",
    "revision": "9f52d7cb626e40cd4575985db365a973"
  },
  {
    "url": "assets/img/path3.jpg",
    "revision": "ee80efe440b8c2ea5b39a865dc8e2a9f"
  },
  {
    "url": "assets/img/path4.jpg",
    "revision": "bed0cfb9fc0cd4a7918aa4dee1dc133c"
  },
  {
    "url": "assets/img/path5.jpg",
    "revision": "382926f5523ad45933ee120a379bcad4"
  },
  {
    "url": "assets/img/patrat.jpg",
    "revision": "66f1df35dd15367174cd2fa242bcc1f1"
  },
  {
    "url": "assets/img/pizza.svg",
    "revision": "7e8948fe59b57cb262ac11890abff556"
  },
  {
    "url": "assets/img/profile-page.jpg",
    "revision": "7f1e55167ebeedc3126980ecab69bf28"
  },
  {
    "url": "assets/img/recipe-default.jpg",
    "revision": "e80d1dea35762be7feb8c47ad19c904c"
  },
  {
    "url": "assets/img/recipes_image.jpg",
    "revision": "b79d8b1580e6121cc09e77173fc25aae"
  },
  {
    "url": "assets/img/rest-default.jpg",
    "revision": "d4dc29369f18a704767fe12f9c5e92d5"
  },
  {
    "url": "assets/img/restaurants_image.jpg",
    "revision": "29485343e23a33344ed27666323b1363"
  },
  {
    "url": "assets/img/ripp.jpg",
    "revision": "20856dde0633f68b51fd3e4288cbe6e3"
  },
  {
    "url": "assets/img/ryan.jpg",
    "revision": "9d4a558e7169ed763a05715627bc088c"
  },
  {
    "url": "assets/img/sav.jpg",
    "revision": "6533e4e04912f83e55a27ce5648a0784"
  },
  {
    "url": "assets/img/square-purple-1.jpg",
    "revision": "12c32fea26c15adeb1a684c446a331a4"
  },
  {
    "url": "assets/img/square1.jpg",
    "revision": "2beaf25349cf45c80f95a2c985e1706e"
  },
  {
    "url": "assets/img/square2.jpg",
    "revision": "177eeff6f53f2ed23ec307d9f64ba8f6"
  },
  {
    "url": "assets/img/square3.jpg",
    "revision": "fe095074234979d683e10270136fcc31"
  },
  {
    "url": "assets/img/square4.jpg",
    "revision": "7e3d1e3a9c2b2fee02c63b21135933a7"
  },
  {
    "url": "assets/img/square5.jpg",
    "revision": "e3c583014e1ca2a2cd94477426378367"
  },
  {
    "url": "assets/img/square6.jpg",
    "revision": "a98c97e801e3ab7e30d9ca682499ceb3"
  },
  {
    "url": "assets/img/sukrut.jpg",
    "revision": "9638154249521d71b68e0b3c564138c8"
  },
  {
    "url": "assets/img/triunghiuri.jpg",
    "revision": "2ed3d8c4109274e2e07df0ff67f31cf4"
  },
  {
    "url": "assets/img/varun.jpeg",
    "revision": "242cf57027324e59687d961775123bd4"
  },
  {
    "url": "assets/img/waffle.svg",
    "revision": "8c4be70773d4087045adf43953d9474d"
  },
  {
    "url": "assets/img/waves.jpg",
    "revision": "62298f1213d47ec63606c6e41100bedf"
  },
  {
    "url": "assets/js/black-dashboard.js",
    "revision": "67f35505846fb6bdc09abacb337ac875"
  },
  {
    "url": "assets/js/black-dashboard.min.js",
    "revision": "a213881e9ea6ee650b22e7b5d3d39b97"
  },
  {
    "url": "assets/js/blk-design-system.js",
    "revision": "f44d5e9ef6d1bf73536bab2b493c0264"
  },
  {
    "url": "assets/js/blk-design-system.min.js",
    "revision": "696655428b0571d3f93ebf100a94395d"
  },
  {
    "url": "assets/js/core/bootstrap.min.js",
    "revision": "48fb842405132a289ad4a49bb9abfcee"
  },
  {
    "url": "assets/js/core/jquery.min.js",
    "revision": "c9f5aeeca3ad37bf2aa006139b935f0a"
  },
  {
    "url": "assets/js/core/popper.min.js",
    "revision": "3621381129597bf34d48a9e2623e05c9"
  },
  {
    "url": "assets/js/plugins/bootstrap-datepicker.js",
    "revision": "5facdafeafc619abf4655c923ba00671"
  },
  {
    "url": "assets/js/plugins/bootstrap-datetimepicker.js",
    "revision": "9d6709b931168ab8d4aae1a2ce951688"
  },
  {
    "url": "assets/js/plugins/bootstrap-notify.js",
    "revision": "21e771df8c43c1161520b9e64ed04ebe"
  },
  {
    "url": "assets/js/plugins/bootstrap-switch.js",
    "revision": "55ec20de03e0d34c2debd542fb5ae45b"
  },
  {
    "url": "assets/js/plugins/chartjs.min.js",
    "revision": "22e340e498652dcc2b2926ba77ffb552"
  },
  {
    "url": "assets/js/plugins/jquery.sharrre.min.js",
    "revision": "febec31d52faf9c6d1af2c8955a46644"
  },
  {
    "url": "assets/js/plugins/moment.min.js",
    "revision": "19436ad9831513f90ffd2421b3d97903"
  },
  {
    "url": "assets/js/plugins/nouislider.min.js",
    "revision": "eec731f0afc75db94584ca89ab39d838"
  },
  {
    "url": "assets/js/plugins/owl.carousel.js",
    "revision": "ccdf893e7d8b26933af0c336bcc3943e"
  },
  {
    "url": "assets/js/plugins/owl.carousel.min.js",
    "revision": "f416f9031fef25ae25ba9756e3eb6978"
  },
  {
    "url": "assets/js/plugins/perfect-scrollbar.jquery.min.js",
    "revision": "04ed9673cfe318346efe72b5f8dcc5a8"
  },
  {
    "url": "assets/scss/black-dashboard.scss",
    "revision": "825407e795b2300f742940734f47b4a3"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_alert.scss",
    "revision": "95abf2bff3f63ccd21e10df9d00d72f4"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_badge.scss",
    "revision": "78ac7b067be83693c822f85b32710e36"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_breadcrumb.scss",
    "revision": "ae5511f8896f42fb8b7f95fc8123f9d4"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_button-group.scss",
    "revision": "895031413d719d48bd92859574a57145"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_buttons.scss",
    "revision": "43a31e865855f720e9ddbb9c5a5d7464"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_card.scss",
    "revision": "bb9abbca97f8a9047fe94d062a2b5e1c"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_carousel.scss",
    "revision": "c8e0bb6638b618762704428b44630142"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_close.scss",
    "revision": "a3e72de15c92a025587d492f763a19c9"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_code.scss",
    "revision": "0e24f7dd0f4394bab0518e3e705beee6"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_custom-forms.scss",
    "revision": "a0d43282216328eb04d581e694a4e415"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_dropdown.scss",
    "revision": "213c0246542f3e7648f9003b421d64bc"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_forms.scss",
    "revision": "6c7cd99a35690c96834bb0bce045e5ae"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_functions.scss",
    "revision": "0104873333afb0365c61536fe0a7fcb9"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_grid.scss",
    "revision": "7a62e00e17b11915d573f2c361c3019f"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_images.scss",
    "revision": "6f9869d23c476e794ea242e99afec6cd"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_input-group.scss",
    "revision": "538029e42e83d784be284abc42eee308"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_jumbotron.scss",
    "revision": "df9d9701ed5302a84aaac08a0053f0fb"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_list-group.scss",
    "revision": "9154101f4424fad34c0f598b00402bc2"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_media.scss",
    "revision": "d2ea169e5ccb567ff12e945885a90fa6"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_mixins.scss",
    "revision": "bc61a851c0771e90baaec7d093168060"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_modal.scss",
    "revision": "d6b7b9de9512fd0563af28f32e6c002b"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_nav.scss",
    "revision": "c4fa79df95fd03e252a4d043f6e13c96"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_navbar.scss",
    "revision": "ed4bcf85e11f10528625c0136e56315b"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_pagination.scss",
    "revision": "632e76d77a047e3f12d83ae7f9c2baaa"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_popover.scss",
    "revision": "cff4b5b78f44fe0e24fbbe8ff8dff2f8"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_print.scss",
    "revision": "2afb46d4be01058ece2f21c32828b626"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_progress.scss",
    "revision": "483d1b4654cc75bd8b84817b55703fa0"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_reboot.scss",
    "revision": "7194866921fd046296c6e26d2403d7e3"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_root.scss",
    "revision": "111c0270ee49008df62a2e9ba0078f01"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_tables.scss",
    "revision": "dbafb0c930c18061d99499d42f1ae207"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_tooltip.scss",
    "revision": "beac5a1d0f70f2dc0fc666310209f067"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_transitions.scss",
    "revision": "8322fa00a9703a2a1ef639de51812ba8"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_type.scss",
    "revision": "e0fe044d45835213d83e3e7cc91086f3"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_utilities.scss",
    "revision": "aba2cc4d6ae7c3b1f575371599ec740a"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/_variables.scss",
    "revision": "3d44f6dfc9f103d61b5f54f6c89e4431"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_alert.scss",
    "revision": "2bed73c51e646a7d2e30f05d02864101"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_background-variant.scss",
    "revision": "a8951be7f19a8c0ac9d21b2d1a5831f4"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_badge.scss",
    "revision": "89f5463b8a3c2a55390c6ac63202e4d5"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_border-radius.scss",
    "revision": "534186d88eaa34cd09fa9c5e6ffb5d9e"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_box-shadow.scss",
    "revision": "0734cb894c290124df54c0e58ed520a6"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_breakpoints.scss",
    "revision": "1432996697524970d8357660037d6eab"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_buttons.scss",
    "revision": "031fc8be7a910fa28e966f713faaade5"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_caret.scss",
    "revision": "7e09484d7478e1147c950314ee1530f5"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_clearfix.scss",
    "revision": "f8d39651a1054cf73e1d56ad398c0af0"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_float.scss",
    "revision": "6780a52aed9bf93133b7bd0bf906fae2"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_forms.scss",
    "revision": "75d9fba6e8953861f485909c892581ef"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_gradients.scss",
    "revision": "0f44c939a3f29492ccc0cbd62499f940"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_grid-framework.scss",
    "revision": "fc5c6a71d623764182da16cfc45f221d"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_grid.scss",
    "revision": "757a3a445501042f59af88406f97222e"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_hover.scss",
    "revision": "f884a03407e4592c1fb0bb9e6b8b5282"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_image.scss",
    "revision": "4b36d87b0e03ce4388166e1565bfeccc"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_list-group.scss",
    "revision": "d0bd528640e0a1b7858f2a8d8a3f98f0"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_lists.scss",
    "revision": "c7e34a356a8616f3ad20b7bf88c93854"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_nav-divider.scss",
    "revision": "07d70d24944b9ca2cfff3ca5d8d4eb53"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_pagination.scss",
    "revision": "dac3e7dbc8c3d3984574b2b717f37207"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_reset-text.scss",
    "revision": "c0b0f39e5df38ceab17f408a8343978a"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_resize.scss",
    "revision": "af032cea5fd5e37d9a5a8b971e290ff4"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_screen-reader.scss",
    "revision": "e37dc4419b741957d814ca73b7ba3da3"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_size.scss",
    "revision": "d21a0400871d28cfa21ca6ca6aded272"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_table-row.scss",
    "revision": "60382810086bb5f2cf98791bd45ee1b6"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_text-emphasis.scss",
    "revision": "a85378d3b236b668c9c3f24e0bfbea8e"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_text-hide.scss",
    "revision": "8259a871a2d125da4434a625e3c4711d"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_text-truncate.scss",
    "revision": "c51a1018bf42368c45eb12d6ac16f938"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_transition.scss",
    "revision": "0b4f045b6f05f6997a703bc5da172a12"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/mixins/_visibility.scss",
    "revision": "7f31029762c03ca5148d2612c24bc757"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/utilities/_align.scss",
    "revision": "2d85a42f5904cead7a9371485c63dce5"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/utilities/_background.scss",
    "revision": "e733cf333823bd71687f542c67e18d4d"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/utilities/_borders.scss",
    "revision": "bc1201b38d5ddf4510d57e42928e4425"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/utilities/_clearfix.scss",
    "revision": "01ed6cc705196c6f0fe33300de134ee7"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/utilities/_display.scss",
    "revision": "49fb929e9c66b26c143efbed1a0b0b39"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/utilities/_embed.scss",
    "revision": "8dffa88a0a583613970d49886340991c"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/utilities/_flex.scss",
    "revision": "6a75ca706305a0a90e6c2d8d9f0ea162"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/utilities/_float.scss",
    "revision": "d15b3c16fde3ee08d8bc2b38c2830f28"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/utilities/_position.scss",
    "revision": "3b7aaa3216a140892f311e88d1a58648"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/utilities/_screenreaders.scss",
    "revision": "84c388e27d908d2489d1724f464cdc71"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/utilities/_shadows.scss",
    "revision": "8d38293481d07336b8811782205e50c8"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/utilities/_sizing.scss",
    "revision": "11d1d5fcb17b6d14ad0acbf5f680a818"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/utilities/_spacing.scss",
    "revision": "9db37aeb4306f6cd7566fb8275b764ad"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/utilities/_text.scss",
    "revision": "66deb01e6d1502841d6eb35f4a478ada"
  },
  {
    "url": "assets/scss/black-dashboard/bootstrap/utilities/_visibility.scss",
    "revision": "efe6b7991e3b1924fc26d0ace1a71bc6"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_alerts.scss",
    "revision": "b004546c5be3c6a456ba3d19f99f9eac"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_buttons.scss",
    "revision": "e2a61f383227da81c401c749ab5705f3"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_card.scss",
    "revision": "14db995a216d1c90047d2d2ed98bd304"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_checkboxes-radio.scss",
    "revision": "d8f9098b65d9b522f7d706532849b493"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_dropdown.scss",
    "revision": "66fb5f40dddeb87ca04cd5b0062e2904"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_fixed-plugin.scss",
    "revision": "6e2bf952ea0606cfc2297bff255ecbfb"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_footer.scss",
    "revision": "f2d9d4bd064c09e2e78660482aae51e6"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_forms.scss",
    "revision": "d4bb8e735b2a6e56f40b5ccc22417a10"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_functions.scss",
    "revision": "5eddfc6c79579a88423c5c26ba03b0b2"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_images.scss",
    "revision": "ad80ee5fe37914cbbb17a2a687de894c"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_input-group.scss",
    "revision": "52854a986840cba3ee07c712ed94a0a6"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_misc.scss",
    "revision": "861d1a0bf191cab41a5a0e44cadb62cd"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_mixins.scss",
    "revision": "eb7ff29512a94687c5acb76dd1db4f4f"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_modal.scss",
    "revision": "e746c9d715917137f4cd47423e32a53d"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_navbar.scss",
    "revision": "8764e9b41b2c1b2e35036b270c52360d"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_rtl.scss",
    "revision": "f516398c5fbedb24f0fdcefa4f986fb4"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_sidebar-and-main-panel.scss",
    "revision": "fc73740e56b530116e1562892bb228dd"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_tables.scss",
    "revision": "fea66235bbcd6702b865af35ad66ec61"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_type.scss",
    "revision": "c6f6de459aec0d6ceb6eb7c2687cf178"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_utilities.scss",
    "revision": "158ffd61896a3ee478f02f93e4e28377"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_variables.scss",
    "revision": "fd11a760ce0b3bb4fff014a933cc0016"
  },
  {
    "url": "assets/scss/black-dashboard/custom/_white-content.scss",
    "revision": "9f3ec55196e090498559a59cbcb81505"
  },
  {
    "url": "assets/scss/black-dashboard/custom/cards/_card-chart.scss",
    "revision": "50e9cfda8c9fb04b7620577f51931ea1"
  },
  {
    "url": "assets/scss/black-dashboard/custom/cards/_card-map.scss",
    "revision": "280b0a330bddfab3e7b3a37e36890acf"
  },
  {
    "url": "assets/scss/black-dashboard/custom/cards/_card-plain.scss",
    "revision": "0ce519ea9682aa5c458de5a5e234a1b3"
  },
  {
    "url": "assets/scss/black-dashboard/custom/cards/_card-task.scss",
    "revision": "264363fd255c24f6176a7a3f93be02d6"
  },
  {
    "url": "assets/scss/black-dashboard/custom/cards/_card-user.scss",
    "revision": "7b7544a73f33a29a2d23d3a04037ee4b"
  },
  {
    "url": "assets/scss/black-dashboard/custom/mixins/_alert.scss",
    "revision": "13b2de361f1a8859e51a71077f2826a0"
  },
  {
    "url": "assets/scss/black-dashboard/custom/mixins/_background-variant.scss",
    "revision": "74a1642fbb59651cdf415c16106d9728"
  },
  {
    "url": "assets/scss/black-dashboard/custom/mixins/_badges.scss",
    "revision": "48be924691a8238e00739d1dbb462cd9"
  },
  {
    "url": "assets/scss/black-dashboard/custom/mixins/_buttons.scss",
    "revision": "94bf0af5beddd80585053bef202b39ea"
  },
  {
    "url": "assets/scss/black-dashboard/custom/mixins/_dropdown.scss",
    "revision": "f77cfe63b95464bba785820daaafbde1"
  },
  {
    "url": "assets/scss/black-dashboard/custom/mixins/_forms.scss",
    "revision": "7254e1a0b9612a33009b475bee37ff7b"
  },
  {
    "url": "assets/scss/black-dashboard/custom/mixins/_icon.scss",
    "revision": "d1f57940556baab0e2363f5e6c7b3833"
  },
  {
    "url": "assets/scss/black-dashboard/custom/mixins/_inputs.scss",
    "revision": "02226321c8b870393145170da5542f73"
  },
  {
    "url": "assets/scss/black-dashboard/custom/mixins/_modals.scss",
    "revision": "785ffd867db46a6c65e09d48f2d0067c"
  },
  {
    "url": "assets/scss/black-dashboard/custom/mixins/_page-header.scss",
    "revision": "650f14b49f1a2ac461197e4be3849477"
  },
  {
    "url": "assets/scss/black-dashboard/custom/mixins/_popovers.scss",
    "revision": "e6fad169b5b89a48c8ac0fb3cac74fa5"
  },
  {
    "url": "assets/scss/black-dashboard/custom/mixins/_vendor-prefixes.scss",
    "revision": "0641f71dc6f7e1f6e28f85535d89914e"
  },
  {
    "url": "assets/scss/black-dashboard/custom/mixins/_wizard.scss",
    "revision": "c1cc6e49090d57e7fab1cf4a6720fe15"
  },
  {
    "url": "assets/scss/black-dashboard/custom/mixins/opacity.scss",
    "revision": "f71273a12f13be603032bf9aa4aa9c1a"
  },
  {
    "url": "assets/scss/black-dashboard/custom/utilities/_backgrounds.scss",
    "revision": "47ec369bcb78980cbbb08508e4cb7b6c"
  },
  {
    "url": "assets/scss/black-dashboard/custom/utilities/_floating.scss",
    "revision": "6f17c5a0338bb06799252db9ffa70897"
  },
  {
    "url": "assets/scss/black-dashboard/custom/utilities/_helper.scss",
    "revision": "41f67995a35fe8ea68ed6ae246d6bd54"
  },
  {
    "url": "assets/scss/black-dashboard/custom/utilities/_position.scss",
    "revision": "5910a30a2eb9c8abdf3d66221a3a1c81"
  },
  {
    "url": "assets/scss/black-dashboard/custom/utilities/_shadows.scss",
    "revision": "af8e293e1d13fb678792e72acc4a626f"
  },
  {
    "url": "assets/scss/black-dashboard/custom/utilities/_sizing.scss",
    "revision": "5562d8c9a8204804ebf4c6b295bb6526"
  },
  {
    "url": "assets/scss/black-dashboard/custom/utilities/_spacing.scss",
    "revision": "fad86c4fcdaa84e2994fe9a5d7c7ab03"
  },
  {
    "url": "assets/scss/black-dashboard/custom/utilities/_text.scss",
    "revision": "97bd0b19d4119db9220603483dff209f"
  },
  {
    "url": "assets/scss/black-dashboard/custom/utilities/_transform.scss",
    "revision": "c134361279f6d3671b1bb81b1f69354c"
  },
  {
    "url": "assets/scss/black-dashboard/custom/vendor/_plugin-animate-bootstrap-notify.scss",
    "revision": "de7ec5a8ee0053a9ab093b46181f3aaa"
  },
  {
    "url": "assets/scss/black-dashboard/custom/vendor/_plugin-perfect-scrollbar.scss",
    "revision": "6f36b1309fbbde634a5d54dd1734274a"
  },
  {
    "url": "assets/scss/black-dashboard/plugins/_plugin-perfect-scrollbar.scss",
    "revision": "6f36b1309fbbde634a5d54dd1734274a"
  },
  {
    "url": "assets/scss/blk-design-system.scss",
    "revision": "9679e6ed99fb4823e6f41d2e3cd0e78b"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_alert.scss",
    "revision": "95abf2bff3f63ccd21e10df9d00d72f4"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_badge.scss",
    "revision": "78ac7b067be83693c822f85b32710e36"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_breadcrumb.scss",
    "revision": "ae5511f8896f42fb8b7f95fc8123f9d4"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_button-group.scss",
    "revision": "895031413d719d48bd92859574a57145"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_buttons.scss",
    "revision": "43a31e865855f720e9ddbb9c5a5d7464"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_card.scss",
    "revision": "bb9abbca97f8a9047fe94d062a2b5e1c"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_carousel.scss",
    "revision": "c8e0bb6638b618762704428b44630142"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_close.scss",
    "revision": "a3e72de15c92a025587d492f763a19c9"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_code.scss",
    "revision": "0e24f7dd0f4394bab0518e3e705beee6"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_custom-forms.scss",
    "revision": "a0d43282216328eb04d581e694a4e415"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_dropdown.scss",
    "revision": "213c0246542f3e7648f9003b421d64bc"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_forms.scss",
    "revision": "6c7cd99a35690c96834bb0bce045e5ae"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_functions.scss",
    "revision": "0104873333afb0365c61536fe0a7fcb9"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_grid.scss",
    "revision": "7a62e00e17b11915d573f2c361c3019f"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_images.scss",
    "revision": "6f9869d23c476e794ea242e99afec6cd"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_input-group.scss",
    "revision": "538029e42e83d784be284abc42eee308"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_jumbotron.scss",
    "revision": "df9d9701ed5302a84aaac08a0053f0fb"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_list-group.scss",
    "revision": "9154101f4424fad34c0f598b00402bc2"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_media.scss",
    "revision": "d2ea169e5ccb567ff12e945885a90fa6"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_mixins.scss",
    "revision": "bc61a851c0771e90baaec7d093168060"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_modal.scss",
    "revision": "d6b7b9de9512fd0563af28f32e6c002b"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_nav.scss",
    "revision": "c4fa79df95fd03e252a4d043f6e13c96"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_navbar.scss",
    "revision": "ed4bcf85e11f10528625c0136e56315b"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_pagination.scss",
    "revision": "632e76d77a047e3f12d83ae7f9c2baaa"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_popover.scss",
    "revision": "cff4b5b78f44fe0e24fbbe8ff8dff2f8"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_print.scss",
    "revision": "2afb46d4be01058ece2f21c32828b626"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_progress.scss",
    "revision": "483d1b4654cc75bd8b84817b55703fa0"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_reboot.scss",
    "revision": "5a33ba08c855320e1e309c959d364780"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_root.scss",
    "revision": "111c0270ee49008df62a2e9ba0078f01"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_tables.scss",
    "revision": "dbafb0c930c18061d99499d42f1ae207"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_tooltip.scss",
    "revision": "beac5a1d0f70f2dc0fc666310209f067"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_transitions.scss",
    "revision": "8322fa00a9703a2a1ef639de51812ba8"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_type.scss",
    "revision": "e0fe044d45835213d83e3e7cc91086f3"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_utilities.scss",
    "revision": "aba2cc4d6ae7c3b1f575371599ec740a"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/_variables.scss",
    "revision": "3d44f6dfc9f103d61b5f54f6c89e4431"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_alert.scss",
    "revision": "2bed73c51e646a7d2e30f05d02864101"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_background-variant.scss",
    "revision": "a8951be7f19a8c0ac9d21b2d1a5831f4"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_badge.scss",
    "revision": "89f5463b8a3c2a55390c6ac63202e4d5"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_border-radius.scss",
    "revision": "534186d88eaa34cd09fa9c5e6ffb5d9e"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_box-shadow.scss",
    "revision": "0734cb894c290124df54c0e58ed520a6"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_breakpoints.scss",
    "revision": "1432996697524970d8357660037d6eab"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_buttons.scss",
    "revision": "031fc8be7a910fa28e966f713faaade5"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_caret.scss",
    "revision": "7e09484d7478e1147c950314ee1530f5"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_clearfix.scss",
    "revision": "f8d39651a1054cf73e1d56ad398c0af0"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_float.scss",
    "revision": "6780a52aed9bf93133b7bd0bf906fae2"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_forms.scss",
    "revision": "75d9fba6e8953861f485909c892581ef"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_gradients.scss",
    "revision": "0f44c939a3f29492ccc0cbd62499f940"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_grid-framework.scss",
    "revision": "fc5c6a71d623764182da16cfc45f221d"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_grid.scss",
    "revision": "757a3a445501042f59af88406f97222e"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_hover.scss",
    "revision": "f884a03407e4592c1fb0bb9e6b8b5282"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_image.scss",
    "revision": "4b36d87b0e03ce4388166e1565bfeccc"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_list-group.scss",
    "revision": "d0bd528640e0a1b7858f2a8d8a3f98f0"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_lists.scss",
    "revision": "c7e34a356a8616f3ad20b7bf88c93854"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_nav-divider.scss",
    "revision": "07d70d24944b9ca2cfff3ca5d8d4eb53"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_pagination.scss",
    "revision": "dac3e7dbc8c3d3984574b2b717f37207"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_reset-text.scss",
    "revision": "c0b0f39e5df38ceab17f408a8343978a"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_resize.scss",
    "revision": "af032cea5fd5e37d9a5a8b971e290ff4"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_screen-reader.scss",
    "revision": "e37dc4419b741957d814ca73b7ba3da3"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_size.scss",
    "revision": "d21a0400871d28cfa21ca6ca6aded272"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_table-row.scss",
    "revision": "60382810086bb5f2cf98791bd45ee1b6"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_text-emphasis.scss",
    "revision": "a85378d3b236b668c9c3f24e0bfbea8e"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_text-hide.scss",
    "revision": "8259a871a2d125da4434a625e3c4711d"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_text-truncate.scss",
    "revision": "c51a1018bf42368c45eb12d6ac16f938"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_transition.scss",
    "revision": "0b4f045b6f05f6997a703bc5da172a12"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/mixins/_visibility.scss",
    "revision": "7f31029762c03ca5148d2612c24bc757"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/utilities/_align.scss",
    "revision": "2d85a42f5904cead7a9371485c63dce5"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/utilities/_background.scss",
    "revision": "e733cf333823bd71687f542c67e18d4d"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/utilities/_borders.scss",
    "revision": "bc1201b38d5ddf4510d57e42928e4425"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/utilities/_clearfix.scss",
    "revision": "01ed6cc705196c6f0fe33300de134ee7"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/utilities/_display.scss",
    "revision": "49fb929e9c66b26c143efbed1a0b0b39"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/utilities/_embed.scss",
    "revision": "8dffa88a0a583613970d49886340991c"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/utilities/_flex.scss",
    "revision": "6a75ca706305a0a90e6c2d8d9f0ea162"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/utilities/_float.scss",
    "revision": "d15b3c16fde3ee08d8bc2b38c2830f28"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/utilities/_position.scss",
    "revision": "3b7aaa3216a140892f311e88d1a58648"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/utilities/_screenreaders.scss",
    "revision": "84c388e27d908d2489d1724f464cdc71"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/utilities/_shadows.scss",
    "revision": "8d38293481d07336b8811782205e50c8"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/utilities/_sizing.scss",
    "revision": "11d1d5fcb17b6d14ad0acbf5f680a818"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/utilities/_spacing.scss",
    "revision": "9db37aeb4306f6cd7566fb8275b764ad"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/utilities/_text.scss",
    "revision": "66deb01e6d1502841d6eb35f4a478ada"
  },
  {
    "url": "assets/scss/blk-design-system/bootstrap/utilities/_visibility.scss",
    "revision": "efe6b7991e3b1924fc26d0ace1a71bc6"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_alerts.scss",
    "revision": "b004546c5be3c6a456ba3d19f99f9eac"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_badge.scss",
    "revision": "d338b339fa79ae6fe7245fad12099f46"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_buttons.scss",
    "revision": "eb0e2c1ae72352f93d83681f58626650"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_card.scss",
    "revision": "7d11a272c610ecfe985ea22967066daf"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_checkboxes-radio.scss",
    "revision": "ebac61562521909cf711664d2160a114"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_dropdown.scss",
    "revision": "c51f94b14c64c9caa9c3ddb22346c934"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_example-pages.scss",
    "revision": "83c423a58890c214dc04e4c58998cad9"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_fixed-plugin.scss",
    "revision": "6e2bf952ea0606cfc2297bff255ecbfb"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_footer.scss",
    "revision": "66a7142f07feeff203dc4230f4c25621"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_forms.scss",
    "revision": "0c1dc48db655483aaf189d416aecd0c4"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_functions.scss",
    "revision": "5eddfc6c79579a88423c5c26ba03b0b2"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_icons.scss",
    "revision": "22dd3c2d929e0f61288c420059c2416a"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_images.scss",
    "revision": "085166b8e71840ed478b71247b969e3b"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_info-areas.scss",
    "revision": "2655eaac99353089d6537660ab2fb0de"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_input-group.scss",
    "revision": "b211c16fd201e2f4ec6ce4c8a34285ed"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_misc.scss",
    "revision": "326e62c5f12f53ec9aae4093da5859ea"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_mixins.scss",
    "revision": "eb7ff29512a94687c5acb76dd1db4f4f"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_modal.scss",
    "revision": "4ec507b13cb6d0e50e2c3cbef33d1b90"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_navbar.scss",
    "revision": "4d3dff42cc0c21d4982ad84e13f28424"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_pagination.scss",
    "revision": "5821aa5a0fcb6040cc0955f1ff4eb2aa"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_pills.scss",
    "revision": "9b4b403d796632de72b6baa3bd4d93fe"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_progress.scss",
    "revision": "966886d7a93c90501ea06927c4b2a7bf"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_rtl.scss",
    "revision": "f516398c5fbedb24f0fdcefa4f986fb4"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_sections.scss",
    "revision": "4f6b2874e1c17385e8521a775eeff1a1"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_tables.scss",
    "revision": "266e26368050a1a1cedd17a42f80641e"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_tabs.scss",
    "revision": "62479633d299ab96912b2f908be10205"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_type.scss",
    "revision": "db8491482741ac99b4c848661ad28f17"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_utilities.scss",
    "revision": "158ffd61896a3ee478f02f93e4e28377"
  },
  {
    "url": "assets/scss/blk-design-system/custom/_variables.scss",
    "revision": "5833be9f26250943455a925c233d47a8"
  },
  {
    "url": "assets/scss/blk-design-system/custom/cards/_card-chart.scss",
    "revision": "0477d335001744f4cd14f89db2c1efbe"
  },
  {
    "url": "assets/scss/blk-design-system/custom/cards/_card-map.scss",
    "revision": "280b0a330bddfab3e7b3a37e36890acf"
  },
  {
    "url": "assets/scss/blk-design-system/custom/cards/_card-plain.scss",
    "revision": "0ce519ea9682aa5c458de5a5e234a1b3"
  },
  {
    "url": "assets/scss/blk-design-system/custom/cards/_card-register.scss",
    "revision": "74eb0c0216b9d75bc63cbc6456b84aae"
  },
  {
    "url": "assets/scss/blk-design-system/custom/cards/_card-stats.scss",
    "revision": "7f8c322467633be1c03cfbbdc0a18644"
  },
  {
    "url": "assets/scss/blk-design-system/custom/cards/_card-task.scss",
    "revision": "264363fd255c24f6176a7a3f93be02d6"
  },
  {
    "url": "assets/scss/blk-design-system/custom/cards/_card-user.scss",
    "revision": "7b7544a73f33a29a2d23d3a04037ee4b"
  },
  {
    "url": "assets/scss/blk-design-system/custom/mixins/_alert.scss",
    "revision": "13b2de361f1a8859e51a71077f2826a0"
  },
  {
    "url": "assets/scss/blk-design-system/custom/mixins/_background-variant.scss",
    "revision": "74a1642fbb59651cdf415c16106d9728"
  },
  {
    "url": "assets/scss/blk-design-system/custom/mixins/_badges.scss",
    "revision": "48be924691a8238e00739d1dbb462cd9"
  },
  {
    "url": "assets/scss/blk-design-system/custom/mixins/_buttons.scss",
    "revision": "94bf0af5beddd80585053bef202b39ea"
  },
  {
    "url": "assets/scss/blk-design-system/custom/mixins/_dropdown.scss",
    "revision": "f77cfe63b95464bba785820daaafbde1"
  },
  {
    "url": "assets/scss/blk-design-system/custom/mixins/_forms.scss",
    "revision": "7254e1a0b9612a33009b475bee37ff7b"
  },
  {
    "url": "assets/scss/blk-design-system/custom/mixins/_icon.scss",
    "revision": "afd51d2f04b6e3b661521a6b34c1401d"
  },
  {
    "url": "assets/scss/blk-design-system/custom/mixins/_inputs.scss",
    "revision": "02226321c8b870393145170da5542f73"
  },
  {
    "url": "assets/scss/blk-design-system/custom/mixins/_modals.scss",
    "revision": "785ffd867db46a6c65e09d48f2d0067c"
  },
  {
    "url": "assets/scss/blk-design-system/custom/mixins/_page-header.scss",
    "revision": "650f14b49f1a2ac461197e4be3849477"
  },
  {
    "url": "assets/scss/blk-design-system/custom/mixins/_popovers.scss",
    "revision": "e6fad169b5b89a48c8ac0fb3cac74fa5"
  },
  {
    "url": "assets/scss/blk-design-system/custom/mixins/_vendor-prefixes.scss",
    "revision": "0d4944e9d744179a0a890f0cae19024c"
  },
  {
    "url": "assets/scss/blk-design-system/custom/mixins/_wizard.scss",
    "revision": "c1cc6e49090d57e7fab1cf4a6720fe15"
  },
  {
    "url": "assets/scss/blk-design-system/custom/mixins/opacity.scss",
    "revision": "f71273a12f13be603032bf9aa4aa9c1a"
  },
  {
    "url": "assets/scss/blk-design-system/custom/sections/_blogs.scss",
    "revision": "5a0d780e107ebae5e69426f352d84f8b"
  },
  {
    "url": "assets/scss/blk-design-system/custom/sections/_contactus.scss",
    "revision": "3480b3bc0e2431b4f915cfa430597d26"
  },
  {
    "url": "assets/scss/blk-design-system/custom/sections/_features.scss",
    "revision": "b8ef5c11cd0ef03479f02886a4c0ef11"
  },
  {
    "url": "assets/scss/blk-design-system/custom/sections/_headers.scss",
    "revision": "3bfa42647df1575a70a80f8a05bebb79"
  },
  {
    "url": "assets/scss/blk-design-system/custom/sections/_pricing.scss",
    "revision": "de16309d482a82be44928d992b703681"
  },
  {
    "url": "assets/scss/blk-design-system/custom/sections/_projects.scss",
    "revision": "061952cca78c8563ba5d94ecd97686bd"
  },
  {
    "url": "assets/scss/blk-design-system/custom/sections/_social-subscribe-lines.scss",
    "revision": "d900e0bf69f02599b15a1524e2a243fd"
  },
  {
    "url": "assets/scss/blk-design-system/custom/sections/_team.scss",
    "revision": "fee78a0a5f5cece35b64e0daf9af8ae0"
  },
  {
    "url": "assets/scss/blk-design-system/custom/sections/_testimonials.scss",
    "revision": "408efb82085b10fc79867bb184cf533f"
  },
  {
    "url": "assets/scss/blk-design-system/custom/utilities/_backgrounds.scss",
    "revision": "47ec369bcb78980cbbb08508e4cb7b6c"
  },
  {
    "url": "assets/scss/blk-design-system/custom/utilities/_floating.scss",
    "revision": "6f17c5a0338bb06799252db9ffa70897"
  },
  {
    "url": "assets/scss/blk-design-system/custom/utilities/_helper.scss",
    "revision": "41f67995a35fe8ea68ed6ae246d6bd54"
  },
  {
    "url": "assets/scss/blk-design-system/custom/utilities/_position.scss",
    "revision": "5910a30a2eb9c8abdf3d66221a3a1c81"
  },
  {
    "url": "assets/scss/blk-design-system/custom/utilities/_shadows.scss",
    "revision": "af8e293e1d13fb678792e72acc4a626f"
  },
  {
    "url": "assets/scss/blk-design-system/custom/utilities/_sizing.scss",
    "revision": "5562d8c9a8204804ebf4c6b295bb6526"
  },
  {
    "url": "assets/scss/blk-design-system/custom/utilities/_spacing.scss",
    "revision": "fad86c4fcdaa84e2994fe9a5d7c7ab03"
  },
  {
    "url": "assets/scss/blk-design-system/custom/utilities/_text.scss",
    "revision": "97bd0b19d4119db9220603483dff209f"
  },
  {
    "url": "assets/scss/blk-design-system/custom/utilities/_transform.scss",
    "revision": "c134361279f6d3671b1bb81b1f69354c"
  },
  {
    "url": "assets/scss/blk-design-system/custom/vendor/_plugin-animate-bootstrap-notify.scss",
    "revision": "de7ec5a8ee0053a9ab093b46181f3aaa"
  },
  {
    "url": "assets/scss/blk-design-system/custom/vendor/_plugin-bootstrap-switch.scss",
    "revision": "75fb5f7257c9e678abe7eb672b8580db"
  },
  {
    "url": "assets/scss/blk-design-system/custom/vendor/_plugin-datetimepicker.scss",
    "revision": "8e8edfd14667fafab80a31d399a36704"
  },
  {
    "url": "assets/scss/blk-design-system/custom/vendor/_plugin-nouislider.scss",
    "revision": "6338be79007e88a24ad2f315df2fd6ae"
  },
  {
    "url": "assets/scss/blk-design-system/custom/vendor/_plugin-perfect-scrollbar.scss",
    "revision": "6f36b1309fbbde634a5d54dd1734274a"
  },
  {
    "url": "contact.html",
    "revision": "b51a4ff92a85c753d9cfbd7169a02dcd"
  },
  {
    "url": "favorites.html",
    "revision": "e150c50a51a086a5f82568c121b6b5df"
  },
  {
    "url": "home/images/icons/icon-128x128.png",
    "revision": "cd5b7d50fe5f29b8eefdefb7540157be"
  },
  {
    "url": "home/images/icons/icon-144x144.png",
    "revision": "94802c5f5212b0fe5a450500eca11360"
  },
  {
    "url": "home/images/icons/icon-152x152.png",
    "revision": "2745e1a12846f1f352f4bdf478a40d95"
  },
  {
    "url": "home/images/icons/icon-192x192.png",
    "revision": "00c44e7f51e8bdc98b405a263461be1b"
  },
  {
    "url": "home/images/icons/icon-384x384.png",
    "revision": "68f4ead599cbf9f1c681374597ccd73c"
  },
  {
    "url": "home/images/icons/icon-512x512.png",
    "revision": "ef7d6583297685034259936ae89b94f1"
  },
  {
    "url": "home/images/icons/icon-72x72.png",
    "revision": "bea6334cc99487fc1cde4de7e758d214"
  },
  {
    "url": "home/images/icons/icon-96x96.png",
    "revision": "a040e22f5f75b1fc8d00f4d41610c2ee"
  },
  {
    "url": "home/index.html",
    "revision": "05cb1167b0e494a476bdabdbbabe53d8"
  },
  {
    "url": "home/loader.css",
    "revision": "2a5d7c942af7e1961b91cf8cec0aa045"
  },
  {
    "url": "home/manifest.json",
    "revision": "c54318e8ee88b910837f36b272765a0a"
  },
  {
    "url": "home/register.html",
    "revision": "5a1735b354a844c06cf69c1b4592d1df"
  },
  {
    "url": "index.html",
    "revision": "76568c0a1668e361cb10bdeb478145af"
  },
  {
    "url": "loading.js",
    "revision": "a9dec7bd42f231251b67bab0e2c5de9d"
  },
  {
    "url": "logout.js",
    "revision": "f14a46e866ecf5d4e062af1cd6944228"
  },
  {
    "url": "precache-manifest.d5257e9d0a569ae10d91a57a0e6767c5.js",
    "revision": "d5257e9d0a569ae10d91a57a0e6767c5"
  },
  {
    "url": "service-worker.js",
    "revision": "324fb96eecec94be50cc9f0cc7f2027d"
  },
  {
    "url": "showFavorites.js",
    "revision": "caab60ae7165896a64c57c8d6f197ce6"
  },
  {
    "url": "static/js/2.7556db80.chunk.js",
    "revision": "e1d0599c7006115c6df76d9c2733ec75"
  },
  {
    "url": "static/js/main.3d096d48.chunk.js",
    "revision": "d77b9140745097d5f7654fc0ebd20e28"
  },
  {
    "url": "static/js/runtime-main.4872fbb3.js",
    "revision": "9d6c0318068934cd7991f598e96acfbf"
  },
  {
    "url": "user.html",
    "revision": "c733b38402dfbceb3690d1ddf364157e"
  },
  {
    "url": "user.js",
    "revision": "19eb1d4004b7ea619337815cebae42c4"
  }
]);
} else {
  console.log("Boo! Workbox didn't load 😬");
}
