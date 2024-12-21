const User = document.getElementById('user')
const Pass = document.getElementById('pass')
const user_text = document.getElementById('user_text')
const pass_text = document.getElementById('pass_text')
const Send = document.getElementById('send')


User.onkeydown = () => {
     const UserValue = User.value

     if (UserValue.length < 8) {
          user_text.style.display = "inline"
     }
     else {
          user_text.style.display = "none"
     }
}

Pass.onkeyup = () => {
     const PassValue = Pass.value

     if(PassValue.length < 4) {
          pass_text.style.display = 'inline'
     }
     else {
          pass_text.style.display = 'none'
     }
}

show = function () {
     if(Send.style.opacity = '0') {
          Send.style.transform = 'translateY(0)'
          Send.style.transition = 'all ease-in 1.5s linear'
          Send.style.opacity = '1'
     }
}

show()