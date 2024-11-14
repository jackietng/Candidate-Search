const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const styles = {
    nav: {
      display: 'flex', 
      width: '100%',
      justifyContent: 'left', 
      gap: '1rem',
      color: 'white', 
    }, 
    ul: {
      display: 'flex', 
      listStyle: 'none', 
      gap: '1rem', 
    }, 
    li: {
      display: 'flex', 
      alignItems: 'center', 
      color: 'white', 
    }, 
    a: {
      textDecoration: 'none',
    },
  }
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <a href="/"> Home </a>
        </li>
        <li style={styles.li}>
          <a href="/SavedCandidates"> Potential Candidates </a>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;
