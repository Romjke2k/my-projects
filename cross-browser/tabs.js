document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.step-link').forEach(function(tabs) {
        console.log(document.querySelectorAll('.step-link'))
        tabs.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            console.log(path)
            document.querySelectorAll('.consult').forEach(function(tabContent) {
                tabContent.classList.remove('consult-is-active')
            })


            document.querySelector(`[data-target="${path}"]`).classList.add('consult-is-active')
            document.querySelectorAll('.step-link').forEach(function(tab_link) {
                tab_link.classList.remove('step-link-is-active');
            });
            this.classList.add('step-link-is-active');


        })

    })
})