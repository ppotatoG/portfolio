var clickTimes=0,
    language=document.querySelector('.language'),
    familySiteBtn=document.querySelector('.family_site_btn');

language.addEventListener('click', function(){

    var languageForm=document.querySelector('.language_form');

    clickTimes++;

    if(clickTimes%2==0){
        languageForm.style.display='none';
        language.classList.remove("language_style");
    }
    else{
        languageForm.style.display='block';
        language.classList.add("language_style");
    }
});


familySiteBtn.addEventListener('click', function(){

    var FamilySiteForm=document.querySelector('.family_site_form'),
    FamilySiteStyle=document.querySelector('.family_site');

    clickTimes++;

    if(clickTimes%2==0){
        FamilySiteForm.style.display='none';
        FamilySiteStyle.classList.remove("family_site_style");
    }
    else{
        FamilySiteForm.style.display='block';
        FamilySiteStyle.classList.add("family_site_style");
    }

});

var quickBtn = document.querySelectorAll('.quick_img_link li'),
    quickBg = document.querySelector('#quickmenu'),
    quickBar = document.querySelector('.quick_bar'),
    quickmenuHidden=document.querySelectorAll('.quick_hidden');

for(var i=0; i<=4; i++){
    quickBtn[i].addEventListener('click', function(){      
        var dataId = this.getAttribute('data-id');

        document.querySelector("#"+ dataId).classList.add("on");
        quickBar.classList.add('on');
        quickBg.classList.add('on');
    });
}
for(var i=0; i<=3; i++){
    quickmenuHidden[i].addEventListener('click', function(){
        location.reload();
    });
}
