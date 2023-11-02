const questions = document.querySelectorAll('.question')


questions.forEach(question => {
  question.addEventListener('click', e => {
    
    document.querySelectorAll('.answer').forEach(answer => {
      answer.classList.remove('open')
    })
    // question.nextElementSibling.className = 'open'
    // question.nextElementSibling.classList.toggle('open')
    const parent = question.parentElement
    const answer = parent.querySelector('.answer')
    answer.classList.add('open')


  })
})