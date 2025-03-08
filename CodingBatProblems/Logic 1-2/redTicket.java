public int redTicket(int a, int b, int c) {
  if(a==b && b==c && a==2){
    return 10;
  }else if(a==b && b==c){
    return 5;
  }else if(!(c==a) && !(b==a)){
    return 1;
  } return 0;
}