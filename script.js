window.addEventListener('DOMContentLoaded', function() {//runs js when DOM is loaded
    const ctx = document.getElementById('pie');
    if (ctx) {
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['DAD Party', 'PPP Party', 'CCCC Party', 'MCD Party'],
                datasets: [{
                    data: [45, 5, 27, 23],
                    backgroundColor: [
                        'orange', 'skyblue', 'maroon', 'yellowgreen'
                    ]
                }]
            }
        });
    }
}) 