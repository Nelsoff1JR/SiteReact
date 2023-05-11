export default function Header(){
  
  return(
    <>
  <div className="menu-icon">
    <i className="fas fa-bars header__menu"></i>
  </div>
   
  <header className="header">
    <div className="header__search">Search...</div>
    <div className="header__avatar">
      <img src="imagens/pessoa3x4.jpg"/><span className="material-symbols-outlined">
expand_more
</span>
    </div>
  </header>
    </>
  );
}
