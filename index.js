let cadastro = []

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    let dat = document.querySelector('input[name=data]')//.value aqui é para teste 
    let nome = document.querySelector('input[name=nome]')
    let rg = document.querySelector('input[name=rg]')
    let emp = document.querySelector('input[name=empresa]')
    let plac = document.querySelector('input[name=placa]')
    let not = document.querySelector('input[name=nota]')
    let pro = document.querySelector('input[name=produto]')
    let quant = document.querySelector('input[type=number]')
    
    let mat = document.querySelector('input[name=matricula]')
    let he = document.querySelector('input[name=entrada]')
    let hs = document.querySelector('input[name=saida]')
    
    cadastro.push({
        nome: nome.value,
        dat: dat.value,
        rg: rg.value,
        emp: emp.value,
        plac: plac.value,
        not: not.value,
        pro: pro.value,
        quant: quant.value,
        mat: mat.value,
        he: he.value,
        hs: hs.value
    
    })

    let adicionar = document.querySelector('.add')
    adicionar.innerHTML = ""
    
    cadastro.map(function(val){
        adicionar.innerHTML += `
        
        <div class="cont" >
       
        <h4>Data: </h4>
        <h4 class="d">`+val.dat+`</h4>
        
        <h4>Nome: </h4> 
        <h3>`+val.nome+`</h3>
        
        <h4>Rg:</h4>
        <h3>`+val.rg+`</h3>
        
        <h4>Empresa:</h4>
        <h3>`+val.emp+`</h3>
        
        <h4>Placa:</h4>
        <h3>`+val.plac+`</h3>
        
        <h4>Nota:</h4>
        <h3>`+val.not+`</h3>

        <h4>Produto:</h4>
        <h3>`+val.pro+`</h3>

        <h4>Quant.:</h4>
        <h3>`+val.quant+`</h3>

        <h4> Entrada:</h4>
        <h3>`+val.he+`</h3>

        <h4> Saída:</h4>
        <h3>`+val.hs+`</h3>

        <h4>Registro: </h4>
        <h4 class="d">`+val.mat+`</h4>
        </div>
        <hr>
        ` 
    })
})
