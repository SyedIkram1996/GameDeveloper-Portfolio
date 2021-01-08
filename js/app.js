$(document).ready(function()
{
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    let loadMore = document.querySelector('#loadMore');

    var sfg = document.getElementById("sub-filter-gallery");
    var sfgb = document.getElementById("sub-filter-gallery-blender");

    hamberger.addEventListener('click',function()
    {
        mobileNav.classList.add('open');
        hamberger.classList.add('hambergerimgdisappear');
    });

    times.addEventListener('click',function()
    {
        hamberger.classList.remove('hambergerimgdisappear');
        mobileNav.classList.remove('open');

    });

    //main filter gallery
    $('.list').click(function()
    {
        const value = $(this).attr('data-filter');
        if (value == 'all') 
        {
            $('.itemBox').show(200);
            loadMore.style.visibility = "visible";
             //Load More Button
    
        $(".loadMoreAll").slice(3,13).hide();
        $("#loadMore").on('click', function (e) {
            e.preventDefault();
            $(".loadMoreAll:hidden").slice(0, 3).slideDown(1000);
        });
         
        }
        else
        {
            loadMore.style.visibility = "hidden";
            $('.itemBox').not('.' + value).hide(100);
            $('.itemBox').filter('.' + value).show(200);
        }

        if (value == "unity") 
        {
            sfg.style.display = "block";
            sfgb.style.display = "none";
            $('#sub-filter-gallery-blender ul li:nth-child(1)').addClass('active').siblings().removeClass('active');
        }

        else if (value == "blender") 
        {
            sfgb.style.display = "block";
            sfg.style.display = "none";
            $('#sub-filter-gallery ul li:nth-child(1)').addClass('active').siblings().removeClass('active');
        }
        else
        {
            sfg.style.display = "none";
            sfgb.style.display = "none";
            $('#sub-filter-gallery ul li:nth-child(1)').addClass('active').siblings().removeClass('active');
            $('#sub-filter-gallery-blender ul li:nth-child(1)').addClass('active').siblings().removeClass('active');

        }

    });

    // //sub filter gallery unity
    // $('.sub_list').click(function()
    // {
    //     const value = $(this).attr('data-filter');
    //     if (value == 'allgames') 
    //     {
    //         $('.games').show(200);
    //     }
    //     else
    //     {
    //         $('.games').not('.' + value).hide(100);
    //         $('.games').filter('.' + value).show(200);
    //     }
    // });

    //sub filter gallery unity
    $('.sub_list').click(function()
    {
        const value = $(this).attr('data-filter');
        if (value == 'allunity') 
        {
            $('.unity').show(200);
        }
        else
        {
            $('.unity').not('.' + value).hide(100);
            $('.unity').filter('.' + value).show(200);
        }
    });

    // //sub filter gallery blender
    // $('.sub_list_blender').click(function()
    // {
    //     const value = $(this).attr('data-filter');
    //     if (value == 'allmodel') 
    //     {
    //         $('.model').show(200);
    //     }
    //     else
    //     {
    //         $('.model').not('.' + value).hide(100);
    //         $('.model').filter('.' + value).show(200);
    //     }
    // });

    //sub filter gallery blender
    $('.sub_list_blender').click(function()
    {
        const value = $(this).attr('data-filter');
        if (value == 'allblender') 
        {
            $('.blender').show(200);
        }
        else
        {
            $('.blender').not('.' + value).hide(100);
            $('.blender').filter('.' + value).show(200);
        }
    });

    //Active main filter simbling
    $('.list').click(function()
    {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //Active sub filter simbling unity
    $('.sub_list').click(function()
    {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //Active sub filter simbling blender
    $('.sub_list_blender').click(function()
    {
        $(this).addClass('active').siblings().removeClass('active');
    });



    //Load More Button
    
        $(".loadMoreAll").slice(3,13).hide();
        $("#loadMore").on('click', function (e) {
            e.preventDefault();
            $(".loadMoreAll:hidden").slice(0, 3).slideDown(10);
        });

   


});

