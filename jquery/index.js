$(document).ready(function () {
    $("button").click(() => {
        $("button").hide();
        $("p").animate({
            top: "300px"
        }, 2000)
        $("p").animate({
            height: "100px",
            width: "200px"
        }, 2000, () => {
            $("span").animate({
                opacity: "1"
            }, 2000)
            $("span").animate({
                opacity: "0"
            }, 2000)
        })
        setTimeout(() => {
            $("p").animate({
                height: "30px",
                width: "50px"
            }, 1000)
            $("p").animate({
                top: "-600px"
            }, 1000, () => {
                $("div").slideDown();
            })
        }, 8000)

    })

})
