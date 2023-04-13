const textarea=document.querySelector('.conteiner')
const detail=document.querySelector('.detail')
textarea.addEventListener('input',counterFn)
function counterFn() {
     // переменная которая содержит содержимое TextArea
    let result=textarea.value
    let characters=result.length
    let totalwords=result.trim().split(/\s+/).length;
    let paragrafs=result.replace(/\n$/gm, '').split(/\n/).length;
    let times=(((totalwords*60)/256)/60).toFixed(2)
// console.log(characters,totalwords,paragrafs);
console.log(times);
counterinfo(characters,totalwords,paragrafs,times)
}
function counterinfo(characters,totalwords,paragrafs,times) {
    let number=(characters==undefined)? 0:' '
    let numberone=(totalwords==undefined)? 0:' '
    let numbertwo=(paragrafs==undefined)? 0:' '
    let numberthree=(times==undefined)?0:' '
    let detailist=`
    <div class="characters">
      <p class="simvol">Characters: ${characters || number}</p>
      <p class="words">TotalWords: ${totalwords || numberone}</p>
      <p class="parag">Paragrafs: ${paragrafs || numbertwo}</p>
      <p class="time">ReadingTime: ${times || numberthree}</p>


    

    </div>
    `
    detail.innerHTML=detailist
}
counterinfo()


