//this is wrong , bcz mouse cant type like keyboard

class Mousee{
    scroll(){
        return 'scrolling.....'
    }
    typing(){
        return 'typing.....'
    }
}

//based on single responsibility
class Mouse{
    scroll(){
        return 'scrolling.....'
    }
}

class KeyBoard{
    typing(){
        return 'typing.....'
    }
}