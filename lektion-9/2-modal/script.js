const openBtn = document.querySelector('#open-btn')
const closeBtn = document.querySelector('#close-btn')
const modal = document.querySelector('#modal')
const modalBg = document.querySelector('.modal-bg')

// openBtn.addEventListener('click', e => {
//   modal.classList.add('open')
// })

// closeBtn.addEventListener('click', closeModal)


// function closeModal() {
//   modal.classList.remove('open')
// }

// modalBg.addEventListener('click', e => {
//   // if(e.target === modalBg) {
//     closeModal()
//   // }
// })


openBtn.addEventListener('click', e => {
  modalBg.classList.add('open')
  modal.classList.add('open')
})

modalBg.addEventListener('click', closeModal)
closeBtn.addEventListener('click', closeModal)

function closeModal() {
  modalBg.classList.remove('open')
  modal.classList.remove('open')
}