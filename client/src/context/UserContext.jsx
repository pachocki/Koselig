export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token') || localStorage.getItem('token');
    if (token) {
      axios
        .get('/api/profile', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(({ data }) => {
          setUser(data);
          setReady(true);
        })
        .catch((error) => {
          console.log('Error fetching user data:', error);
          setReady(true);
        });
    } else {
      setReady(true);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}