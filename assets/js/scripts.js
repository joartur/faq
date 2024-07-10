document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');

            // Oculta todas as respostas
            const allAnswers = document.querySelectorAll('.faq-answer');
            allAnswers.forEach(ans => {
                if (ans !== answer) {
                    ans.style.display = 'none';
                }
            });

            // Remove a classe 'rotate' de todos os ícones
            const allIcons = document.querySelectorAll('.faq-question i');
            allIcons.forEach(ic => {
                ic.classList.remove('rotate');
            });

            // Exibe ou oculta a resposta clicada e ajusta o ícone
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.classList.remove('rotate');
            } else {
                answer.style.display = 'block';
                icon.classList.add('rotate');
            }
        });
    });
});

