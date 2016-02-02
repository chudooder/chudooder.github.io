function Phrase(name, gameindex, category) {
  this.name = name;
  this.gameindex = gameindex;
}

var phraseList = [
  new Phrase("Careful!",    1),
  new Phrase("Get Back!",   2),
  new Phrase("Stun now!",   4),
  new Phrase("Push now",    6),
  new Phrase("Go!",       12),
  new Phrase("Initiate!",   13),
  new Phrase("Follow me",   14),
  new Phrase("Group up",    15),
  new Phrase("Spread out",  16),
  new Phrase("Split up and farm", 17),
  new Phrase("Attack now!",   18),
  new Phrase("Be right back", 19),
  new Phrase("Dive!",     20),
  new Phrase("On my way",   21),
  new Phrase("Get ready",   22),
  new Phrase("Bait",      23),
  new Phrase("I'm retreating", 78),
  new Phrase("Help!",     5),
  new Phrase("Heal",      24),
  new Phrase("Mana",      25),
  new Phrase("Out of mana", 26),
  new Phrase("Skills on cooldown",  27),
  new Phrase("Ultimate ready",    28),
  new Phrase("Missing!",        8),
  new Phrase("Missing top!",      9),
  new Phrase("Missing mid!",      10),
  new Phrase("Missing bottom!",   11),
  new Phrase("Enemy returned",    29),
  new Phrase("All enemy heroes missing!",   30),
  new Phrase("Enemy incoming!",       31),
  new Phrase("Invisible enemy nearby!",   32),
  new Phrase("Enemy has rune",        33),
  new Phrase("Split push",      34),
  new Phrase("Coming to gank",    35),
  new Phrase("Requesting a gank",   36),
  new Phrase("Fight under the tower", 37),
  new Phrase("Deny the tower!",   38),
  new Phrase("Tower then back", 81),
  new Phrase("Rax then back", 82),
  new Phrase("We need wards.",    3),     
  new Phrase("Buy a courier please",  39),      
  new Phrase("Can anyone upgrade the courier?", 40),      
  new Phrase("We need detection",   41),      
  new Phrase("They have detection", 42),      
  new Phrase("Buy a Teleport Scroll", 43),      
  new Phrase("Re-use courier",    44),      
  new Phrase("Deward please",     45),      
  new Phrase("Building Mekansm",    46),      
  new Phrase("Building Pipe",     47),      
  new Phrase("Let's smoke gank!",   59),
  new Phrase("What should I buy?", 77),
  new Phrase("Ward bot rune", 83),
  new Phrase("Ward top rune", 84),      
  new Phrase("Stack and pull please", 48),      
  new Phrase("Pull creeps please",  49),      
  new Phrase("Pulling creeps",    50),      
  new Phrase("Stack neutrals",    51),      
  new Phrase("Jungling",        52),      
  new Phrase("Roshan",        53),      
  new Phrase("Okay.",         0),     
  new Phrase("Affirmative",     54),      
  new Phrase("Wait",          55),      
  new Phrase("Pause please!",     56),      
  new Phrase("Current Game Time",   57),      
  new Phrase("Check runes please",  58),
  new Phrase("Zeus Ult Now!", 85),      
  new Phrase("Well played!",      7),     
  new Phrase("Good luck, have fun", 60),      
  new Phrase("Nice",          61),      
  new Phrase("Thanks!",       62),      
  new Phrase("Sorry",         63),      
  new Phrase("Don't give up!",    64),      
  new Phrase("That just happened",  65),      
  new Phrase("Game is hard",      66),
  new Phrase("New meta",        67),
  new Phrase("My bad",        68),
  new Phrase("I immediately regret my decision",  69),    
  new Phrase("Relax, you're doing fine",      70),
  new Phrase("Good game", 73),
  new Phrase("(All) Good game", 75),
  new Phrase("(All) Good game, well played", 76),
  new Phrase("Space created", 79),
  new Phrase("Whoops", 80)
];

function Keybind(name, scriptname) {
  this.name = name;
  this.scriptname = scriptname;
}

var keyMap = [];
keyMap[8] = new Keybind("Backspace", "BACKSPACE");
keyMap[9] = new Keybind("Tab", "TAB");
keyMap[13] = new Keybind("Enter", "ENTER");
keyMap[16] = new Keybind("Shift", "SHIFT");
keyMap[17] = new Keybind("Ctrl", "CTRL");
keyMap[18] = new Keybind("Alt", "ALT");
keyMap[19] = new Keybind("Pause", "NUMLOCK");   //don't ask
keyMap[20] = new Keybind("Caps Lock", "CAPSLOCK");
keyMap[27] = new Keybind("Escape", "ESCAPE");
keyMap[33] = new Keybind("Page Up", "PGUP");
keyMap[34] = new Keybind("Page Down", "PGDN");
keyMap[35] = new Keybind("End", "END");
keyMap[36] = new Keybind("Home", "HOME");
keyMap[37] = new Keybind("Left arrow", "LEFTARROW");
keyMap[38] = new Keybind("Up arrow", "UPARROW");
keyMap[39] = new Keybind("Right arrow", "RIGHTARROW");
keyMap[40] = new Keybind("Down arrow", "DOWNARROW");
keyMap[45] = new Keybind("Insert", "INS");
keyMap[46] = new Keybind("Delete", "DEL");
keyMap[48] = new Keybind("0", "0");
keyMap[49] = new Keybind("1", "1");
keyMap[50] = new Keybind("2", "2");
keyMap[51] = new Keybind("3", "3");
keyMap[52] = new Keybind("4", "4");
keyMap[53] = new Keybind("5", "5");
keyMap[54] = new Keybind("6", "6");
keyMap[55] = new Keybind("7", "7");
keyMap[56] = new Keybind("8", "8");
keyMap[57] = new Keybind("9", "9");
keyMap[65] = new Keybind("A", "A");
keyMap[66] = new Keybind("B", "B");
keyMap[67] = new Keybind("C", "C");
keyMap[68] = new Keybind("D", "D");
keyMap[69] = new Keybind("E", "E");
keyMap[70] = new Keybind("F", "F");
keyMap[71] = new Keybind("G", "G");
keyMap[72] = new Keybind("H", "H");
keyMap[73] = new Keybind("I", "I");
keyMap[74] = new Keybind("J", "J");
keyMap[75] = new Keybind("K", "K");
keyMap[76] = new Keybind("L", "L");
keyMap[77] = new Keybind("M", "M");
keyMap[78] = new Keybind("N", "N");
keyMap[79] = new Keybind("O", "O");
keyMap[80] = new Keybind("P", "P");
keyMap[81] = new Keybind("Q", "Q");
keyMap[82] = new Keybind("R", "R");
keyMap[83] = new Keybind("S", "S");
keyMap[84] = new Keybind("T", "T");
keyMap[85] = new Keybind("U", "U");
keyMap[86] = new Keybind("V", "V");
keyMap[87] = new Keybind("W", "W");
keyMap[88] = new Keybind("X", "X");
keyMap[89] = new Keybind("Y", "Y");
keyMap[90] = new Keybind("Z", "Z");
keyMap[91] = new Keybind("Left Windows", "LWIN");
keyMap[92] = new Keybind("Right Windows", "RWIN");
keyMap[96] = new Keybind("Numpad 0", "KP_INS");
keyMap[97] = new Keybind("Numpad 1", "KP_END");
keyMap[98] = new Keybind("Numpad 2", "KP_DOWNARROW");
keyMap[99] = new Keybind("Numpad 3", "KP_PGDN");
keyMap[100] = new Keybind("Numpad 4", "KP_LEFTARROW");
keyMap[101] = new Keybind("Numpad 5", "KP_5");
keyMap[102] = new Keybind("Numpad 6", "KP_RIGHTARROW");
keyMap[103] = new Keybind("Numpad 7", "KP_HOME");
keyMap[104] = new Keybind("Numpad 8", "KP_UPARROW");
keyMap[105] = new Keybind("Numpad 9", "KP_PGUP");
keyMap[106] = new Keybind("* (Keypad)", "KP_MULTIPLY");
keyMap[107] = new Keybind("+ (Keypad)", "KP_PLUS");
keyMap[109] = new Keybind("- (Keypad)", "KP_MINUS");
keyMap[110] = new Keybind(". (Keypad)", "KP_DEL");
keyMap[111] = new Keybind("/ (Keypad)", "KP_SLASH");
keyMap[112] = new Keybind("F1","F1");
keyMap[113] = new Keybind("F2","F2");
keyMap[114] = new Keybind("F3","F3");
keyMap[115] = new Keybind("F4","F4");
keyMap[116] = new Keybind("F5","F5");
keyMap[117] = new Keybind("F6","F6");
keyMap[118] = new Keybind("F7","F7");
keyMap[119] = new Keybind("F8","F8");
keyMap[120] = new Keybind("F9","F9");
keyMap[121] = new Keybind("F10","F10");
keyMap[122] = new Keybind("F11","F11");
keyMap[123] = new Keybind("F12","F12");
keyMap[145] = new Keybind("Scroll Lock", "SCROLLOCK");
keyMap[186] = new Keybind(";","SEMICOLON");
keyMap[187] = new Keybind("=","=");
keyMap[188] = new Keybind(",",",");
keyMap[189] = new Keybind("-","-");
keyMap[190] = new Keybind(".",".");
keyMap[191] = new Keybind("/","/");
keyMap[192] = new Keybind("`","`");
keyMap[219] = new Keybind("[","[");
keyMap[220] = new Keybind("\\","\\");
keyMap[221] = new Keybind("]","]");
keyMap[222] = new Keybind("'","'");