public boolean love6(int a, int b) {
  boolean isDiff6 = (Math.abs(a-b) == 6);
  boolean isSum6= (a+b == 6);
  boolean isa6 = (a == 6);
  boolean isb6 = (b == 6);
  if(isa6 || isb6 || isDiff6 || isSum6){
    return true;
  } return false;
}
