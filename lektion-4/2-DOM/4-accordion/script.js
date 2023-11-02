const questions = document.querySelectorAll('.question')


questions.forEach(question => {
  question.addEventListener('click', e => {

    document.querySelectorAll('.answer').forEach(answer => {
      answer.classList.remove('open')
    })

    questions.forEach(question => {
      question.querySelector('i').classList.remove('fa-minus')
      question.querySelector('i').classList.add('fa-plus')
    })

    question.querySelector('i').classList.add('fa-minus')
    question.querySelector('i').classList.remove('fa-plus')

    
    const parent = question.parentElement
    const answer = parent.querySelector('.answer')
    answer.classList.add('open')

  })
})