function phrase(name, gameindex, category) {
  this.name = name;
  this.gameindex = gameindex;
}

var phraseList = [
  new phrase("Careful!",    1),
  new phrase("Get Back!",   2),
  new phrase("Stun now!",   4),
  new phrase("Push now",    6),
  new phrase("Go!",       12),
  new phrase("Initiate!",   13),
  new phrase("Follow me",   14),
  new phrase("Group up",    15),
  new phrase("Spread out",  16),
  new phrase("Split up and farm", 17),
  new phrase("Attack now!",   18),
  new phrase("Be right back", 19),
  new phrase("Dive!",     20),
  new phrase("On my way",   21),
  new phrase("Get ready",   22),
  new phrase("Bait",      23),
  new phrase("Help!",     5),
  new phrase("Heal",      24),
  new phrase("Mana",      25),
  new phrase("Out of mana", 26),
  new phrase("Skills on cooldown",  27),
  new phrase("Ultimate ready",    28),
  new phrase("Missing!",        8),
  new phrase("Missing top!",      9),
  new phrase("Missing mid!",      10),
  new phrase("Missing bottom!",   11),
  new phrase("Enemy returned",    29),
  new phrase("All enemy heroes missing!",   30),
  new phrase("Enemy incoming!",       31),
  new phrase("Invisible enemy nearby!",   32),
  new phrase("Enemy has rune",        33),
  new phrase("Split push",      34),
  new phrase("Coming to gank",    35),
  new phrase("Requesting a gank",   36),
  new phrase("Fight under the tower", 37),
  new phrase("Deny the tower!",   38),
  new phrase("We need wards.",    3),     
  new phrase("Buy a courier please",  39),      
  new phrase("Can anyone upgrade the courier?", 40),      
  new phrase("We need detection",   41),      
  new phrase("They have detection", 42),      
  new phrase("Buy a Teleport Scroll", 43),      
  new phrase("Re-use courier",    44),      
  new phrase("Deward please",     45),      
  new phrase("Building Mekansm",    46),      
  new phrase("Building Pipe",     47),      
  new phrase("Let's smoke gank!",   59),      
  new phrase("Stack and pull please", 48),      
  new phrase("Pull creeps please",  49),      
  new phrase("Pulling creeps",    50),      
  new phrase("Stack neutrals",    51),      
  new phrase("Jungling",        52),      
  new phrase("Roshan",        53),      
  new phrase("Okay.",         0),     
  new phrase("Affirmative",     54),      
  new phrase("Wait",          55),      
  new phrase("Pause please!",     56),      
  new phrase("Current Game Time",   57),      
  new phrase("Check runes please",  58),      
  new phrase("Well played!",      7),     
  new phrase("Good luck, have fun", 60),      
  new phrase("Nice",          61),      
  new phrase("Thanks!",       62),      
  new phrase("Sorry",         63),      
  new phrase("Don't give up!",    64),      
  new phrase("That just happened",  65),      
  new phrase("Game is hard",      66),
  new phrase("New meta",        67),
  new phrase("My bad",        68),
  new phrase("I immediately regret my decision",  69),    
  new phrase("Relax, you're doing fine",      70)
];

function keybind(name, scriptname) {
  this.name = name;
  this.scriptname = scriptname;
}

var keyMap = [];
keyMap[8] = new keybind("Backspace", "BACKSPACE");
keyMap[9] = new keybind("Tab", "TAB");
keyMap[13] = new keybind("Enter", "ENTER");
keyMap[16] = new keybind("Shift", "SHIFT");
keyMap[17] = new keybind("Ctrl", "CTRL");
keyMap[18] = new keybind("Alt", "ALT");
keyMap[19] = new keybind("Pause", "NUMLOCK");   //don't ask
keyMap[20] = new keybind("Caps Lock", "CAPSLOCK");
keyMap[27] = new keybind("Escape", "ESCAPE");
keyMap[33] = new keybind("Page Up", "PGUP");
keyMap[34] = new keybind("Page Down", "PGDN");
keyMap[35] = new keybind("End", "END");
keyMap[36] = new keybind("Home", "HOME");
keyMap[37] = new keybind("Left arrow", "LEFTARROW");
keyMap[38] = new keybind("Up arrow", "UPARROW");
keyMap[39] = new keybind("Right arrow", "RIGHTARROW");
keyMap[40] = new keybind("Down arrow", "DOWNARROW");
keyMap[45] = new keybind("Insert", "INS");
keyMap[46] = new keybind("Delete", "DEL");
keyMap[48] = new keybind("0", "0");
keyMap[49] = new keybind("1", "1");
keyMap[50] = new keybind("2", "2");
keyMap[51] = new keybind("3", "3");
keyMap[52] = new keybind("4", "4");
keyMap[53] = new keybind("5", "5");
keyMap[54] = new keybind("6", "6");
keyMap[55] = new keybind("7", "7");
keyMap[56] = new keybind("8", "8");
keyMap[57] = new keybind("9", "9");
keyMap[65] = new keybind("A", "A");
keyMap[66] = new keybind("B", "B");
keyMap[67] = new keybind("C", "C");
keyMap[68] = new keybind("D", "D");
keyMap[69] = new keybind("E", "E");
keyMap[70] = new keybind("F", "F");
keyMap[71] = new keybind("G", "G");
keyMap[72] = new keybind("H", "H");
keyMap[73] = new keybind("I", "I");
keyMap[74] = new keybind("J", "J");
keyMap[75] = new keybind("K", "K");
keyMap[76] = new keybind("L", "L");
keyMap[77] = new keybind("M", "M");
keyMap[78] = new keybind("N", "N");
keyMap[79] = new keybind("O", "O");
keyMap[80] = new keybind("P", "P");
keyMap[81] = new keybind("Q", "Q");
keyMap[82] = new keybind("R", "R");
keyMap[83] = new keybind("S", "S");
keyMap[84] = new keybind("T", "T");
keyMap[85] = new keybind("U", "U");
keyMap[86] = new keybind("V", "V");
keyMap[87] = new keybind("W", "W");
keyMap[88] = new keybind("X", "X");
keyMap[89] = new keybind("Y", "Y");
keyMap[90] = new keybind("Z", "Z");
keyMap[91] = new keybind("Left Windows", "LWIN");
keyMap[92] = new keybind("Right Windows", "RWIN");
keyMap[96] = new keybind("Numpad 0", "KP_INS");
keyMap[97] = new keybind("Numpad 1", "KP_END");
keyMap[98] = new keybind("Numpad 2", "KP_DOWNARROW");
keyMap[99] = new keybind("Numpad 3", "KP_PGDN");
keyMap[100] = new keybind("Numpad 4", "KP_LEFTARROW");
keyMap[101] = new keybind("Numpad 5", "KP_5");
keyMap[102] = new keybind("Numpad 6", "KP_RIGHTARROW");
keyMap[103] = new keybind("Numpad 7", "KP_HOME");
keyMap[104] = new keybind("Numpad 8", "KP_UPARROW");
keyMap[105] = new keybind("Numpad 9", "KP_PGUP");
keyMap[106] = new keybind("* (Keypad)", "KP_MULTIPLY");
keyMap[107] = new keybind("+ (Keypad)", "KP_PLUS");
keyMap[109] = new keybind("- (Keypad)", "KP_MINUS");
keyMap[110] = new keybind(". (Keypad)", "KP_DEL");
keyMap[111] = new keybind("/ (Keypad)", "KP_SLASH");
keyMap[112] = new keybind("F1","F1");
keyMap[113] = new keybind("F2","F2");
keyMap[114] = new keybind("F3","F3");
keyMap[115] = new keybind("F4","F4");
keyMap[116] = new keybind("F5","F5");
keyMap[117] = new keybind("F6","F6");
keyMap[118] = new keybind("F7","F7");
keyMap[119] = new keybind("F8","F8");
keyMap[120] = new keybind("F9","F9");
keyMap[121] = new keybind("F10","F10");
keyMap[122] = new keybind("F11","F11");
keyMap[123] = new keybind("F12","F12");
keyMap[145] = new keybind("Scroll Lock", "SCROLLOCK");
keyMap[186] = new keybind(";","SEMICOLON");
keyMap[187] = new keybind("=","=");
keyMap[188] = new keybind(",",",");
keyMap[189] = new keybind("-","-");
keyMap[190] = new keybind(".",".");
keyMap[191] = new keybind("/","/");
keyMap[192] = new keybind("`","`");
keyMap[219] = new keybind("[","[");
keyMap[220] = new keybind("\\","\\");
keyMap[221] = new keybind("]","]");
keyMap[222] = new keybind("'","'");