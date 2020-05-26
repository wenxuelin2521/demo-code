window.onload = function () {
  const btnList = document.querySelectorAll(".btn")
  const contentList = document.querySelectorAll('.tab')
  console.log(btnList)
  for (let i = 0; i < btnList.length; i++) {
    btnList[i].onclick = function (e) {
        // console.log(index)
        for(let j = 0 ; j < contentList.length ; j++){
            if(j !== i){
                contentList[j].classList.remove('active')
                contentList[j].classList.add('leave')
            }else{
                contentList[j].classList.remove('leave')
                contentList[j].classList.add('active')
            }
        }
    }
  }
}
