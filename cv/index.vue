<template>
    <div>
        <button @click="generatePDF"  >download</button>
    </div>
    <div class="container" ref="invoice">
        <div class="left_Side">
            <div class="profileText">
                <div class="imgBx">
                    <img src="./assets/rania.jpg" alt="" />
                </div>
                <h2>Rania Larbaoui<br><span>Web Developer </span></h2>
            </div>

            <div class="contactInfo">
                <h3 class="title">contact info</h3>
                <ul>
                    <li>
                        <span class="icon"><i class="fas fa-phone-square" aria-hidden="true"></i></span>
                        <span class="text">0675145049</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span class="icon"><i class="fas fa-envelope" aria-hidden="true"></i> </span>
                        <span class="text">ranialarbaoui8@gmail.com</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span class="icon"><i class="fab fa-linkedin" aria-hidden="true"></i> </span>
                        <span class="text">rania-larbaoui-644582184</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span class="icon"> <i class="fab fa-skype" aria-hidden="true"></i></span>
                        <span class="text">rania larbaoui/Skype</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span class="icon"><i class="fas fa-map-marker" aria-hidden="true"></i> </span>
                        <span class="text">Alger.Tipaza</span>
                    </li>
                </ul>
            </div>
            <div class="contactInfo education">
                <h3 class="title"> education</h3>
                <ul>
                    <li>
                        <h5>2016-2017</h5>
                        <h4>3as Math-Technique</h4>
                        <h4>LYCEE TECHNICUM</h4>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h5>2017-2019</h5>
                        <h4>TECHNICIEN SUPPERIEUR EN CHIMIE DU L'INDUSTRIE</h4>
                        <h4>L'INSTITUT NATIONAL DU HAJOUTE</h4>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h5>2019-2022</h5>
                        <h4>TECHNICIEN SUPPERIEUR EN DEVEMOPPEMENT DES APPLICATION MULTI-PLATEFORMS</h4>
                        <h4>CENTRE D'EXELLANCE BOUSMAIL</h4>
                    </li>
                </ul>
            </div>
            <div class="contactInfo language">
                <h3 class="title"> languages</h3>
                <ul>
                    <li>
                        <span class="text">English</span>
                        <span class="percent">
                            <div style="width: 75%;"></div>
                        </span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span class="text">Francais</span>
                        <span class="percent">
                            <div style="width: 80%;"></div>
                        </span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span class="text">Arabic</span>
                        <span class="percent">
                            <div style="width: 80%;"></div>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="right_Side">
          
            <div class="about">
                <h2 class="title2">Experience</h2>
                <div class="box">
                    <div class="year_company">
                        <h5>2019-2022</h5>
                        <h5>EADN(Entreprise d'Appui au Developpement Numerique)</h5>
                    </div>
                    <div class="text">
                        <h4>JUNIOR DEVELOPPER</h4>
                        <p>formation developpement d'application multiplateformes</p>
                    </div>
                </div>
            </div>

            <div class="about">
                <h2 class="title2">Projets</h2>
                <div class="text">
                    <h4>Application E-commerce </h4>
                    <p>Le projet fin d'etude est une E-boutique Artisanale contient une gerstion de vente et achat pour des
                        produits 100% artisanales</p>
                </div>
            </div>
            <div class="about skills">
                <h2 class="title2">Professionel Skills</h2>
                <div class="box">
                    <h4>JAVASCRIPT</h4>
                    <div class="percent">
                        <div style="width:55%;"> </div>
                    </div>
                </div>
                <div class="box">
                    <h4>HTML</h4>
                    <div class="percent">
                        <div style="width:80%;"> </div>
                    </div>
                </div>
                <div class="box">
                    <h4>CSS</h4>
                    <div class="percent">
                        <div style="width:80%;"></div>
                    </div>
                </div>
                <div class="box">
                    <h4>JAVA</h4>
                    <div class="percent">
                        <div style="width:85%;"> </div>
                    </div>
                </div>
                <div class="box">
                    <h4>.Net</h4>
                    <div class="percent">
                        <div style="width:45%;"> </div>
                    </div>
                </div>
                <div class="box">
                    <h4>UML</h4>
                    <div class="percent">
                        <div style="width:90%;"> </div>
                    </div>
                </div>
                <div class="box">
                    <h4>BPMN</h4>
                    <div class="percent">
                        <div style="width:68%;"> </div>
                    </div>
                </div>
                <div class="box">
                    <h4>WordPress</h4>
                    <div class="percent">
                        <div style="width:75%;"> </div>
                    </div>
                </div>

            </div>

            <div class="about interest">
                <h2 class="title2">Interest </h2>
                <ul>
                    <li><i class="fas fa-book" aria-hidden="true"></i>bouquiner</li>
                    <li><i class="fas fa-gamepad" aria-hidden="true"></i>Gaming</li>
                    <li><i class="fas fa-music" aria-hidden="true"></i>jouer la music </li>
                    <li><i class="fas fa-plane" aria-hidden="true"></i>voyager</li>
                </ul>
            </div>
        </div>
    </div>
</template>
        

<script>
import html2pdf from 'html2pdf.js'

export default {
    methods: {
        generatePDF() {
            const invoice = this.$refs.invoice;
            console.log("invoice", invoice);
            if (invoice) {
                const opt = {
                    filename: "cv.pdf",
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: "mm", format: "a3", orientation: "portrait" },
                };
                html2pdf().from(invoice).set(opt).save();
            } else {
                console.error('Invoice element not found');
            }
        }
    }
};
</script>
 
<style>
@import url('http://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    position: relative;
    width: 100%;
    max-width: 1000px;
    min-height: 1000px;
    background: white;
    margin: 50px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    box-shadow: 0 35px 55px rgba(0, 0, 0, 0.1);
}

.container .left_Side {
    position: relative;
    background: #003147;
    padding: 40px;
}

.profileText {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.profileText .imgBx {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
}

.profileText .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.profileText h2 {
    color: #fff;
    font-size: 1.5em;
    margin-top: 20px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    line-height: 1.4em;
}

.profileText h2 span {
    font-size: 0.8em;
    font-weight: 300;
}

.contactInfo {
    padding-top: 40px;
}

.title {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
}

.contactInfo ul {
    position: relative;
}

.contactInfo ul li {
    position: relative;
    list-style: none;
    margin: 10px 0;
    cursor: pointer;
}

.contactInfo ul li .icon {
    display: inline-block;
    width: 30px;
    font-size: 18px;
    color: #09a9f4;
}

.contactInfo ul li span {
    color: #fff;
    font-weight: 300;
}

.contactInfo.education li {
    margin-bottom: 15px;
}

.contactInfo.education h5 {
    color: #03a9f4;
    font-weight: 500;
}

.contactInfo.education h4:nth-child(2) {
    color: #fff;
    font-weight: 500;
}

.contactInfo.education h4 {
    text-transform: uppercase;
    color: #848C99;
    font-weight: 300;
}

.contactInfo.language .percent {
    position: relative;
    width: 100%;
    height: 6px;
    background: #081921;
    display: block;
    margin-top: 5px;
}

.contactInfo.language .percent div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #03a9f4;
}



.container .right_Side {
    position: relative;
    background: white;
    padding: 40px;
}

.about {
    margin-bottom: 50px;
}

.about:last-child {
    margin-bottom: 0;
}

.title2 {
    color: #003147;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
}

p {
    color: #333;
}

.about .box {
    display: flex;
    flex-direction: row;
    margin: 20px 0;
}

.about .box .year_company {
    min-width: 150px;
}

.about .box .year_company h5 {
    text-transform: uppercase;
    color: #848c90;
    font-weight: 600;
}

.about .box .text h4 {
    text-transform: uppercase;
    color: #2a7da2;
    font-size: 16px;
}

.skills .box {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 150px 1fr;
    justify-content: center;
    align-items: center;

}

.skills .box h4 {
    text-transform: uppercase;
    color: #848c99;
    font-weight: 500;
}

.skills .box .percent {
    position: relative;
    width: 100%;
    height: 10px;
    background: #f0f0f0;
}

.skills .box .percent div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #03a9f4;
}

.interest ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.interest ul li {
    list-style: none;
    color: #333;
    font-weight: 500;
    margin: 10px 0;
}

.interest ul li .fa {
    color: #03a9f4;
    font-size: 18px;
    width: 20px;
}


@media(max-width:1000px) {
    .container {
        margin: 10px;
        grid-template-columns: repeat(1, 1fr);
    }

    .interest ul {
        grid-template-columns: repeat(2, 1fr);

    }
}

@media(max-width:600px) {
    .about .box {
        flex-direction: column;
    }

    .about .box .year_company {
        margin-bottom: 5px;
    }

    .interest ul {
        grid-template-columns: repeat(1, 1fr);
    }

    .skills .box {
        grid-template-columns: repeat(1, 1fr);

    }
}

.button {
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
}</style>