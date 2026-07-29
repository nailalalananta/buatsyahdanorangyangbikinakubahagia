// =========================
// ELEMENT
// =========================


const music =
document.querySelector("#music");

console.log("JS berhasil dimuat");

const memory =
document.querySelector(".memory");


const ribbon =
document.querySelector(".ribbon");


const container =
document.querySelector(".container");


const paper =
document.querySelector(".paper");


const paperTitle =
document.querySelector(
    ".letter-header h1"
);


const paperContent =
document.querySelector(
    ".letter-content"
);



// =========================
// DATA SURAT
// =========================


const letterData = {


    title: "Please Read This",


    content: `

        <p>
            hallooww mass :)
        </p>


        <p>
        i love u....
        </p>
        <p>
        terimakasi yawww,, karna sejauh ini kamu udah jadi bagian dari
        cerita aku. semoga apapun yang kita lewati, kita sama sama
        bisa belajar jadi orang lebih baik. tetap jaga diri, jaga kesehatan,
         dan jangan lupa bahagia yah.....
        </p>
        <p>
        aku gatau sampai kapan cerita kita akan berjalan. tapi 
        selama masi ada, aku cuma berharap kita bisa saling jaga,
        saling menghargai, dan bikin satu sama lain jadi versi yang
        lebih baik. selalu jaga diri yah, dan tetap menjadi orang yang baikkk.
        JANGANN LUPAAA UNTUK SELALU BAHAGIAAAAAA......
        BAAYYY CINTAAA!!!!
        </p>
        <p>
        kalao suatu saat nanti nemu ini dan baca ini ulang, semoga kamu
        masi inget kalowww pernah adaa seseorang yang selalu mengharapkan
        hal yang terbaik buat kamuuu.....
        </p>
        <p>
        semoga apapun  yang lagi kamu perjuangin sekarang, semuanya
        dimudahkan. jangan lupa istirahat yahh, dan jangan terlalu keras
        sama diri sediriii........ okaaaayyyy sayanggggkuuuu???
        </p>
        <p>
        selalu jaga diri yah, dan tetap menjadi orang yang baikkk.
        JANGANN LUPAAA UNTUK SELALU BAHAGIAAAAAA......
        BAAYYY CINTAAA!!!!
        </p>

    `

};




// =========================
// DATA FOTO BUNGA
// =========================


const flowers = [

    "foto/1.png",

    "foto/2.png",

    "foto/3.png",

    "foto/4.png",

    "foto/5.png",

];


let flowerTimer;





// =========================
// MASUKKAN ISI SURAT
// =========================


paperTitle.textContent =
letterData.title;



paperContent.innerHTML =
letterData.content;





// =========================
// BUKA AMPLOP
// =========================


ribbon.addEventListener(
    "click",
    () => {


        // sembunyikan pita

        ribbon.style.display =
        "none";



        // aktifkan animasi buka

        container.classList.add(
            "open"
        );


    }
);





// =========================
// KLIK KERTAS
// =========================


paper.addEventListener(
    "click",
    () => {


        // kertas fullscreen

        container.classList.add(
            "show-paper"
        );



        // musik mulai

        music.play();



        // tunggu animasi kertas

        setTimeout(
            () => {


                showFlowers();


            },
            1000
        );



        // bunga hilang setelah 7 detik

        setTimeout(
            () => {


                hideFlowers();


            },
            8000
        );


    }
);






// =========================
// TAMPILKAN BUNGA
// =========================


function showFlowers(){


    memory.classList.add(
        "show"
    );



    flowerTimer =
    setInterval(
        () => {



            const img =
            document.createElement(
                "img"
            );



            // pilih bunga random

            img.src =
            flowers[
                Math.floor(
                    Math.random()
                    *
                    flowers.length
                )
            ];



            // ukuran random

            const size =
            Math.floor(
                Math.random()
                *
                250
            ) + 80;



            img.style.width =
            size + "px";



            // posisi random layar

            img.style.left =
            Math.random()
            *
            90
            +
            "vw";



            img.style.top =
            Math.random()
            *
            90
            +
            "vh";



            // rotasi random

            img.style.rotate =
            Math.random()
            *
            360
            +
            "deg";



            memory.appendChild(
                img
            );



            // hapus foto lama

            setTimeout(
                () => {

                    img.remove();

                },
                4000
            );



        },
        300
    );

}






// =========================
// HILANGKAN BUNGA
// =========================


function hideFlowers(){


    clearInterval(
        flowerTimer
    );



    memory.classList.remove(
        "show"
    );



    setTimeout(
        () => {

            memory.innerHTML =
            "";

        },
        800
    );

}
