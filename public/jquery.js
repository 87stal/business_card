/* eslint-disable no-useless-concat */
/* eslint-disable no-undef */
(function() {
    $.getJSON('https://reqres.in/api/users', {
        format: 'json',
    }).done((users) => {
        const perPage = users.per_page;

        $.each(users.data, (i, item) => {
            $('.cardList').append(
                `${"<div class='col-4'>"
                + "<div class='user-list_item m-3 border bg-light d-flex flex-row'>"
                + '<img src ='}${item.avatar
                }>`
                + '<div class = \'p-3\'>'
                + `<p class = 'text-uppercase'>${item.first_name
                } ${item.last_name
                }</p>`
                + `<p>${item.email
                }</p>`
                + '</div>'
                + '</div>'
                + '</div>'
            );
        });

        $('.user-list_item').slice(0, perPage).show();

        $('#loadMore').on('click', () => {
            $('.user-list_item:hidden').slice(0, perPage).show();

            if ($('#loadMore').is(':visible')) {
                $('html, body').animate(
                    {
                        scrollTop: $('#loadMore').offset().top,
                    },
                    1000
                );
            }

            if ($('.user-list_item:hidden').length === 0) {
                $('#loadMore').fadeOut();
                $('.cardList').append(
                    '<p class ="text-center">' + 'No more users to display' + '</p>'
                );
            }
        });
    });
}());
