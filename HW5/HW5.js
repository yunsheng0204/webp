$(document).ready(function () {
    $('.btn').on('click', function () {
        var i = 1;

        $.ajax({
            type: 'GET',
            url: 'https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24top=420&%24format=JSON',
            dataType: 'json',
            success: function (response) {
                $.each(response, function (index, element) {
                    if (index % 21 == 0) {
                        $('.info').append(
                            $('<li>',
                                {
                                    text: ' 【 A ' + [i] + ' : ' + element.OriginStationName.Zh_tw + ' 】 '
                                }),
                            $('<br>'),
                            $('<li>',
                                {
                                    text: ' ⇩ 耗時 : ' + element.TravelTime + '分鐘 , 票價 : ' + element.Fares[0].Price + '元'
                                }),
                            $('<br>')
                        );
                        if (index == 399) {
                            $('.info').append(
                                $('<li>',
                                    {
                                        text: ' 【 A ' + [i + 1] + ' : ' + element.DestinationStationName.Zh_tw + ' 】 '
                                    })
                            );
                        }
                        i++;
                        console.log(index);
                    }
                });
            },
            error: function (xhr) {
                alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
            }
        });

    });
});