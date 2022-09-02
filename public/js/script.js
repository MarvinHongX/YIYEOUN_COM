$(function() {
    let page = {
        thisPage: 0,
        totalPage: 0
    }
    const postFunc = {
        indexRender: (data) => {
            $('#main-pic > div').remove()
            $('#main-pic > figure').remove()
            $('#main-name > span').remove()
            $('#main-top-insta > li').remove()
            $('#main-article > ul > section').remove()




            if (data.profile.length > 0) {
                let tmp01 = '<figure><picture>' + '<source srcSet="' + data.profile[0].img256URL + ' 256w, ' + data.profile[0].img512URL + ' 512w, ' + data.profile[0].img1024URL + ' 1024w, ' + data.profile[0].img1200URL + ' 1200w" sizes="(max-width: 900px) 100vw, (max-width: 1280px) 1024px, 1024px">'
                    + '<img class="main-top-pic-01" sizes="(max-width: 900px) 100vw, (max-width: 1280px) 1024px, 1024px" srcSet="' + data.profile[0].img256URL + ' 256w, ' + data.profile[0].img512URL + ' 512w, ' + data.profile[0].img1024URL + ' 1024w, ' + data.profile[0].img1200URL + ' 1200w" src="' + data.profile[0].imgURL + '" alt="" loading="eager">' + '</picture></figure>'
                $('#main-pic').append(tmp01)


                let tmp02 = '<span>' + data.profile[0].userName + '</span>&nbsp;<span>' + data.profile[0].userName2 + '</span>'
                $('#main-name').prepend(tmp02)

                let tmp03 = '<li><a href="' + data.profile[0].instagramURL + '" target="blank" title="insta">' + '<span class="main-top-insta-icon"><svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">'
                    +   '<path d="M8.997.006c2.444 0 2.75.01 3.71.054.957.043 1.611.196 2.184.418a4.41 4.41 0 0 1 1.593 1.038c.5.5.808 1.002 1.038 1.593.222.573.375 1.227.418 2.184.044.96.054 1.266.054 3.71 0 2.443-.01 2.75-.054 3.71-.044.957-.196 1.611-.418 2.183a4.41 4.41 0 0 1-1.038 1.594c-.5.5-1.002.808-1.593 1.038-.573.222-1.227.374-2.184.418-.96.044-1.266.054-3.71.054-2.443 0-2.75-.01-3.71-.054-.957-.044-1.611-.196-2.183-.418A4.41 4.41 0 0 1 1.51 16.49a4.41 4.41 0 0 1-1.038-1.594C.25 14.324.098 13.67.054 12.712.01 11.752 0 11.446 0 9.002 0 6.56.01 6.254.054 5.294.098 4.336.25 3.682.472 3.11A4.41 4.41 0 0 1 1.51 1.516 4.41 4.41 0 0 1 3.104.478C3.676.256 4.33.104 5.288.06c.96-.044 1.266-.054 3.71-.054zm0 1.62c-2.402 0-2.687.01-3.635.053-.878.04-1.354.187-1.671.31-.42.163-.72.358-1.035.673-.314.315-.51.615-.673 1.035-.123.317-.27.793-.31 1.67-.043.949-.052 1.234-.052 3.636s.01 2.687.053 3.635c.04.878.186 1.354.31 1.671.163.42.358.72.672 1.035.315.314.615.51 1.035.673.317.123.793.27 1.67.31.95.043 1.234.052 3.636.052 2.403 0 2.687-.01 3.636-.053.877-.04 1.353-.186 1.67-.31.42-.163.72-.358 1.035-.672.315-.315.51-.615.673-1.035.123-.317.27-.793.31-1.67.043-.95.052-1.234.052-3.636s-.009-2.687-.052-3.636c-.04-.877-.187-1.353-.31-1.67a2.787 2.787 0 0 0-.673-1.035 2.787 2.787 0 0 0-1.035-.673c-.317-.123-.793-.27-1.67-.31-.949-.043-1.233-.052-3.636-.052zM9 11.922A2.921 2.921 0 1 0 9 6.08a2.921 2.921 0 0 0 0 5.842zM9 4.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm6.188 0a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0z" fill="currentColor" fill-rule="evenodd"></path>'
                    + '</svg></span>' + '</a></li>'

                $('#main-top-insta').append(tmp03)

                let tmp04 = ''
                for(let i = 0; i < data.profile.length; i++){
                    if(data.profile[i].status === 'S'){
                        tmp04 += '<section class="article-section">'
                            + '<header>'
                            + '<h1>' + data.profile[i].profileCategoryName + '</h1>'
                            + '</header>'
                            + '<ol>'
                            + '<li class="article-work">'
                            + '<p class="article-work-year">' + data.profile[i].profileYear + '</p>'
                            + '<p class="article-work-name">' + data.profile[i].profileName + '</p>'
                            + '<p class="article-work-cast">' + data.profile[i].profileCast + '</p>'
                            + '</li>'
                    }else if(data.profile[i].status === 'E'){
                        tmp04 += '<li class="article-work">'
                            + '<p class="article-work-year">' + data.profile[i].profileYear + '</p>'
                            + '<p class="article-work-name">' + data.profile[i].profileName + '</p>'
                            + '<p class="article-work-cast">' + data.profile[i].profileCast + '</p>'
                            + '</li>'
                            + '</ol>'
                            + '</section>'
                    }else if(data.profile[i].status === 'B'){
                        tmp04 += '<section class="article-section">'
                            + '<header>'
                            + '<h1>' + data.profile[i].profileCategoryName + '</h1>'
                            + '</header>'
                            + '<ol>'
                            + '<li class="article-work">'
                            + '<p class="article-work-year">' + data.profile[i].profileYear + '</p>'
                            + '<p class="article-work-name">' + data.profile[i].profileName + '</p>'
                            + '<p class="article-work-cast">' + data.profile[i].profileCast + '</p>'
                            + '</li>'
                            + '</ol>'
                            + '</section>'
                    }else{
                        tmp04 += '<li class="article-work">'
                            + '<p class="article-work-year">' + data.profile[i].profileYear + '</p>'
                            + '<p class="article-work-name">' + data.profile[i].profileName + '</p>'
                            + '<p class="article-work-cast">' + data.profile[i].profileCast + '</p>'
                            + '</li>'
                    }
                }
                $('#main-article > ul').append(tmp04)
            }else{
                let tempError01 = '<div class = "main-top-pic-error" > 404 </div>'
                $('#main-pic').prepend(tempError01)

                let tempError02 = '<span>NOT FOUND</span>'
                $('#main-name').prepend(tempError02)
            }

            $('#main-gallery-grid > figure').remove()
            if (data.gallery.length > 0 ){
                let tmp06 = ''

                for(let i = 0; i < data.gallery.length; i++){
                    tmp06 += '<figure class="main-gallery-grid-figure"><picture><img src="' + data.gallery[i].imgURL + '"> </picture></figure>\n'
                }

                $('#main-gallery-grid').append(tmp06)
            }
        },
        postError: (e) => {
            console.log(e)
        }
    }

    if (window.location.pathname === '/' || window.location.pathname === '') {
        $.ajax({
            type: "POST",
            url: "/api/post",
            data: {},
            dataType: "json",
            success: postFunc.indexRender,
            error: postFunc.postError
        })
    }


    const displayFunc = {
        elDisplay: (el, display) => {
            el.style.display = display
        },
        hamburgerDisplay: (display) => {
            let menu = document.getElementById('menu')
            let _display = display === '' ? menu.style.display : display
            if (_display === 'block'){
                menu.style.display = 'none'
                $('.main-00').css('filter', 'blur(0px)')
            } else{
                menu.style.display = 'block'
                $('.main-00').css('filter', 'blur(5px)')
            }
        }
    }

    $('#hamburger').on({
        click: () => {
            displayFunc.hamburgerDisplay('')
        }
    })
    $('.main-00').on({
        click: () => { displayFunc.hamburgerDisplay('block')},
        mousewheel: () => { displayFunc.hamburgerDisplay('block')}
    })

    $('.header-menu-list-el').click(function() {
        $.ajax({
            type : 'POST',
            url : '/others',
            data : { id : $(this).attr('id') },
            dataType: 'json',
            success: postFunc.indexRender,
            error: postFunc.postError
        })
    })

    function setModalPageAndImg(){
        $('.main-gallery-modal-page').text(page.thisPage + ' / ' + page.totalPage)
        $('.main-gallery-modal-img').attr('src', $('#main-gallery-grid > figure').eq(page.thisPage - 1).children('picture').children('img').attr('src'))
    }
    const modalFunc = {
        initClick: (_this) => {
            let figure = $('#main-gallery-grid figure')
            page.thisPage = figure.index(_this) + 1
            page.totalPage = figure.length
            setModalPageAndImg()
        },
        prevClick: () => {
            page.thisPage -= 1
            if (page.thisPage < 1) page.thisPage = page.totalPage
            setModalPageAndImg()
        },
        nextClick: () => {
            page.thisPage += 1
            if (page.thisPage > page.totalPage) page.thisPage = 1
            setModalPageAndImg()
        },
        closeClick: () => {
            displayFunc.elDisplay(document.getElementById('__grid-root'),'block')
            displayFunc.elDisplay(document.getElementById('modal'),'none')
        },
        openClick: () => {
            displayFunc.elDisplay(document.getElementById('modal'),'block')
            displayFunc.elDisplay(document.getElementById('__grid-root'),'none')
        }
    }


    $(document).on('click','.main-gallery-grid-figure', function(){
        console.log(this)
        modalFunc.initClick(this)
        modalFunc.openClick()
    })


    $(document).keydown(function(event) {
        if ( event.keyCode === 27 || event.which === 27 ) {
            modalFunc.closeClick()
        }else if ( event.keyCode === 37 || event.which === 37 ) {
            modalFunc.prevClick()
        }else if ( event.keyCode === 39 || event.which === 39 ) {
            modalFunc.nextClick()
        }
    })


    $('.main-gallery-modal-prev').on({
        click: () => { modalFunc.prevClick() }
    })

    $('.main-gallery-modal-next').on({
        click: () => { modalFunc.nextClick() }
    })

    $('.main-gallery-modal-close').on({
        click: () => { modalFunc.closeClick() },
        touchstart: () => { modalFunc.closeClick() }
    })


})


