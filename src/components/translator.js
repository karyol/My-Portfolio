import translate from './i18n'
import $ from 'jquery'

class translator
{
    constructor()
    {
        this.changeLanguage();
    }
  
    changeLanguage()
    {
        var i18n = translate;
        $("#language select").on('change', function() {
            var lang = $(this).val();
            $("#mtr1").text(i18n[lang].mtr1, 500);
            $("#mtr2").text(i18n[lang].mtr2, 500);
            $("#mtr3").text(i18n[lang].mtr3, 500);
            $("#mtr4").text(i18n[lang].mtr4, 500);
            $("#htr1").text(i18n[lang].htr1, 500);
            $("#htr2").text(i18n[lang].htr2, 500);
            $("#htr3").text(i18n[lang].htr3, 500);
            $("#htr4").text(i18n[lang].htr4, 500);
            $("#htr5").text(i18n[lang].htr5, 500);
            $("#htr6").text(i18n[lang].htr6, 500);
            $("#wtr1").text(i18n[lang].wtr1, 500);
            $("#wtr11").text(i18n[lang].wtr11, 500);
            $("#wtr2").text(i18n[lang].wtr2, 500);
            $("#wtr3").text(i18n[lang].wtr3, 500);
            $("#atr1").text(i18n[lang].atr1, 500);
            $("#atr2").text(i18n[lang].atr2, 500);
            $("#atr3").text(i18n[lang].atr3, 500);
            $("#atr31").text(i18n[lang].atr31, 500);
            $("#atr4").text(i18n[lang].atr4, 500);
            $("#atr5").text(i18n[lang].atr5, 500);
            $("#crtr1").text(i18n[lang].crtr1, 500);
            $("#crtr2").text(i18n[lang].crtr2, 500);
            $("#ctr1").text(i18n[lang].ctr1, 500);
            $("#item1").text(i18n[lang].item1, 500);
            $("#item2").text(i18n[lang].item2, 500);
            $("#item3").text(i18n[lang].item3, 500);
            $("#scroll-start").prop('title', i18n[lang].scrollStart);
            $("#scroll-what").prop('title', i18n[lang].scrollWhat);
            $("#scroll-about").prop('title', i18n[lang].scrollAbout);
            $("#scroll-contact").prop('title', i18n[lang].scrollContact);
        });
    }
}

export default translator
