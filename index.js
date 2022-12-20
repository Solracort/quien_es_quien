let pers_0 = {
    descartado:false,
    numero: 0,
    nombre: "Juan",
    genero: "hombre",
    colorPelo: "oscuro",
    hair: "corto",
    colorOjos: "oscuro",
    gafas: false,
    bigote: false,
    barba:false,
    };

let pers_1 = {
    descartado:false,
    numero: 1,
    nombre: "Carolina",
    genero: "mujer",
    colorPelo: "oscuro",
    hair: "largo",
    colorOjos:"oscuro",
    gafas: false,
    bigote: false,
    barba:false,    
    };
let pers_2 = {
    descartado:false,
    numero: 2,
    nombre: "Gonzalo",
    genero: "hombre",
    colorPelo: "oscuro",
    hair: "corto",
    colorOjos: "verde",
    gafas: true,
    bigote: false,
    barba:false,
};
let pers_3 = {
    descartado:false,
    numero: 3,
    nombre: "Veronica",
    genero: "mujer",
    colorPelo: "oscuro",
    hair: "largo",
    colorOjos: "oscuro",
    gafas: true,
    bigote: false,
    barba:false,
};
let pers_4 = {
    descartado:false,
    numero: 4,
    nombre: "Laura",
    genero: "mujer",
    colorPelo: "pelirrojo",
    hair: "largo",
    colorOjos: "verde",
    gafas: true,
    bigote: false,
    barba:false,
};
let pers_5 = {
    descartado:false,
    numero: 5,
    nombre: "Miguel",
    genero: "hombre",
    colorPelo: "rubio",
    hair: "corto",
    colorOjos: "oscuro",
    gafas: true,
    bigote: true,
    barba: true,
};
let pers_6 = {
    descartado:false,
    numero: 6,
    nombre: "Lidia",
    genero: "mujer",
    colorPelo: "oscuro",
    hair: "largo",
    colorOjos: "azul",
    gafas: false,
    bigote: false,
    barba:false,
};
let pers_7 = {
    descartado:false,
    numero: 7,
    nombre: "Jose",
    genero: "hombre",
    colorPelo: "oscuro",
    hair: "corto",
    colorOjos: "oscuro",
    gafas: false,
    bigote: true,
    barba: true,
};
let pers_8 = {
    descartado:false,
    numero: 8,
    nombre: "Sonia",
    genero: "mujer",
    colorPelo: "rubio",
    hair: "largo",
    colorOjos: "azul",
    gafas: true,
    bigote: false,
    barba:false,
};
let pers_9 = {
    descartado:false,
    numero: 9,
    nombre: "Lucas",
    genero: "hombre",
    colorPelo: "rubio",
    hair: "corto",
    colorOjos: "azul",
    gafas: true,
    bigote: false,
    barba: true,
};
let pers_10 = {
    descartado:false,
    numero: 10,
    nombre: "Lola",
    genero: "mujer",
    colorPelo: "pelirrojo",
    hair: "largo",
    colorOjos: "verde",
    gafas: false,
    bigote: false,
    barba:false,
};
let pers_11 = {
    descartado:false,
    numero: 11,
    nombre: "Edu",
    genero: "hombre",
    colorPelo: "pelirrojo",
    hair: "corto",
    colorOjos:"oscuro",
    gafas: false,
    bigote: true,
    barba:false,
};
let poblacion = [pers_0, pers_1,pers_2, pers_3,pers_4, pers_5, pers_6, pers_7, pers_8, pers_9,pers_10, pers_11 ];
function selectperson() {
    let selection= (Math.floor(Math.random()*12));
    console.log(selection);
    return(poblacion[selection]);
}
let selected = selectperson();
console.log(selected);
let resp =document.querySelector(".answer");
let count = document.querySelector(".counter");
let contador = 0;
function contar(){
    contador++;
    count.textContent=contador;
}
function preguntar(){
    
    let accion = document.querySelector(".accion");
    accion.textContent="Por favor elija una pregunta, la persona elegida...";
    let q1 = document.querySelector(".q1");
    let q2 = document.querySelector(".q2");
    let q3 = document.querySelector(".q3");
    let q4 = document.querySelector(".q4");
    let q5 = document.querySelector(".q5");
    let q6 = document.querySelector(".q6");
    let q7 = document.querySelector(".q7");
    let q8 = document.querySelector(".q8");
    let q9 = document.querySelector(".q9");
    let q10 = document.querySelector(".q10");
    let q11 = document.querySelector(".q11");
    q1.textContent="¿tiene barba?";
    q2.textContent="¿es una mujer?";
    q3.textContent="¿tiene gafas?";
    q4.textContent="¿tiene el color de pelo rubio?";
    q5.textContent="¿tiene el pelo largo?";
    q6.textContent="¿tiene los ojos verdes?";
    q7.textContent="¿tiene el color de pelo oscuro?";
    q8.textContent="¿tiene el color de pelo pelirrojo?";
    q9.textContent="¿tiene los ojos azules?";
    q10.textContent="¿tiene los ojos oscuros?";
    q11.textContent="¿tiene bigote?";
    return selected;
};
//funciones de respuesta   
function barba()      {  
    (selected.barba)?resp.textContent="Si tiene barba":resp.textContent="No tiene barba";
    contar();
    checkbarba();
}; 

function gafas()      {  
    (selected.gafas)?resp.textContent="Si tiene gafas":resp.textContent="No tiene gafas";
    contar();
    checkgafas();
};
function bigote()     {  
    (selected.bigote)?resp.textContent="Si tiene bigote":resp.textContent="No tiene bigote";
    contar();
    checkbigote();
};    
function mujer()      {  
    (selected.genero=="mujer")?resp.textContent="Si es una mujer":resp.textContent="No es una mujer";
    contar();
    checkmujer();
}
function rubio()      {  
    (selected.colorPelo=="rubio")?resp.textContent="Si tiene el pelo rubio":resp.textContent="No tiene el pelo rubio";
    contar();
    checkcolorrubio();
}    
function oscuro()     {  
    (selected.colorPelo=="oscuro")?resp.textContent="Si tiene el pelo oscuro":resp.textContent="No tiene el pelo oscuro";
    contar();
    checkcoloroscuro();
}    
function pelirrojo()  {  
    (selected.colorPelo=="pelirrojo")?resp.textContent="Si tiene el pelo pelirrojo":resp.textContent="No tiene el pelo pelirrojo";
    contar();
    checkcolorpelirrojo();
}    
function largo()      {  
    (selected.hair=="largo")?resp.textContent="Si tiene el pelo largo":resp.textContent="No tiene el pelo largo";
    contar();
    checklargo();
}    
function ojosverdes() {  
    (selected.colorOjos=="verde")?resp.textContent="Si tiene los ojos verdes":resp.textContent="No tiene los ojos verdes";
    contar();
    checkojosverdes();
}    
function ojosazules() {  
    (selected.colorOjos=="azul")?resp.textContent="Si tiene los ojos azules":resp.textContent="No tiene los ojos azules";
    contar();
    checkojosazules();
}    
function ojososcuros(){  
    (selected.colorOjos=="oscuro"?resp.textContent="Si tiene los ojos oscuros":resp.textContent="No tiene los ojos oscuros");
    contar();
    checkojososcuros();
}
//funcion recuento descartes

function cuentadescartados(){
    let eliminados = 0;
    for (let item in poblacion){
        if (poblacion[item].descartado){
            eliminados++;
            console.log("eliminados:" + eliminados);
        }
    }
    if (eliminados==11){
        for(let buscado in poblacion){
            if(poblacion[buscado].descartado==false){
                let sol = document.querySelector(".solucion");
                sol.textContent="La persona buscada es: " + poblacion[buscado].nombre;
            }

        }

    }

}
//funcion eliminar visualmente (difuminar)
function eliminar(nombre){
    console.log(nombre);
    let eliminado = document.getElementById(nombre);
    eliminado.style.opacity = "25%";
    cuentadescartados();
}

//funciones de descarte

function checkbarba(){
    for (let item in poblacion){
        if (selected.barba!=poblacion[item].barba){
            poblacion[item].descartado= true;
            console.log(poblacion[item].nombre);
            eliminar(poblacion[item].nombre);
        };
    };
};
function checkgafas(){
    for (let item in poblacion){
        if (selected.gafas!=poblacion[item].gafas){
            poblacion[item].descartado= true;
            console.log(poblacion[item].nombre);
            eliminar(poblacion[item].nombre);
        };
    };
};
function checkbigote(){
    for (let item in poblacion){
        if (selected.bigote!=poblacion[item].bigote){
            poblacion[item].descartado= true;
            console.log(poblacion[item].nombre);
            eliminar(poblacion[item].nombre);
        }; 
    };
};
function checkmujer(){
    for (let item in poblacion){
        if (selected.genero != poblacion[item].genero){
            poblacion[item].descartado= true;
            console.log(poblacion[item].nombre);
            eliminar(poblacion[item].nombre);
        }; 
    };
};
function checklargo(){
    for (let item in poblacion){
        if (selected.hair != poblacion[item].hair){
            poblacion[item].descartado= true;
            console.log(poblacion[item].nombre);
            eliminar(poblacion[item].nombre);
        }; 
    };
}
function checkcoloroscuro(){
    for (let item in poblacion){
        if ((selected.colorPelo!="oscuro") && (poblacion[item].colorPelo=="oscuro")){
            poblacion[item].descartado= true;
            console.log(poblacion[item].nombre);
            eliminar(poblacion[item].nombre);
        }
        else if  ((selected.colorPelo=="oscuro") && (poblacion[item].colorPelo!="oscuro")){
            poblacion[item].descartado= true;
            console.log(poblacion[item].nombre);
            eliminar(poblacion[item].nombre);
        };
    };
};
function checkcolorrubio(){
    for (let item in poblacion){
        if ((selected.colorPelo!="rubio") && (poblacion[item].colorPelo=="rubio")){
            poblacion[item].descartado= true;
            console.log(poblacion[item].nombre);
            eliminar(poblacion[item].nombre);
        }
        else if  ((selected.colorPelo=="rubio") && (poblacion[item].colorPelo!="rubio")){
            poblacion[item].descartado= true;
            console.log(poblacion[item].nombre);
            eliminar(poblacion[item].nombre);
        };
    };
};
function checkcolorpelirrojo(){
    for (let item in poblacion){
        if ((selected.colorPelo!="pelirrojo") && (poblacion[item].colorPelo=="pelirrojo")){
            poblacion[item].descartado= true;
            console.log(poblacion[item].nombre);
            eliminar(poblacion[item].nombre);
        }
        else if  ((selected.colorPelo=="pelirrojo") && (poblacion[item].colorPelo!="pelirrojo")){
            poblacion[item].descartado= true;
            console.log(poblacion[item].nombre);
            eliminar(poblacion[item].nombre);
        };
    };
};
function checkojososcuros(){
    for (let item in poblacion){
        if ((selected.colorOjos!="oscuro") && (poblacion[item].colorOjos=="oscuro")){
            poblacion[item].descartado= true;
            console.log(poblacion[item].nombre);
            eliminar(poblacion[item].nombre);
        } else if  ((selected.colorOjos=="oscuro") && (poblacion[item].colorOjos!="oscuro")){
            poblacion[item].descartado= true;
            console.log(poblacion[item].nombre);
            eliminar(poblacion[item].nombre);
        };
    };
};
function checkojosazules(){
    for (let item in poblacion){
        if ((selected.colorOjos!="azul") && (poblacion[item].colorOjos=="azul")){
            poblacion[item].descartado= true;
            console.log(poblacion[item].nombre);
            eliminar(poblacion[item].nombre);
        } else if  ((selected.colorOjos=="azul") && (poblacion[item].colorOjos!="azul")){
            poblacion[item].descartado= true;
            console.log(poblacion[item].nombre);
            eliminar(poblacion[item].nombre);
        };
    };
};
function checkojosverdes(){
    for (let item in poblacion){
        if ((selected.colorOjos!="verde") && (poblacion[item].colorOjos=="verde")){
            poblacion[item].descartado= true;
            console.log(poblacion[item].nombre);
            eliminar(poblacion[item].nombre);
        } else if  ((selected.colorOjos=="verde") && (poblacion[item].colorOjos!="verde")){
            poblacion[item].descartado= true;
            console.log(poblacion[item].nombre);
            eliminar(poblacion[item].nombre);
        };
    };
};
