import Cookies from 'universal-cookie';
 const isAuthenticated = () => {
        const cookies=new Cookies();
        const StoredCookiee=cookies.get('tkn');
            if(StoredCookiee===undefined){
                return false;
            }
            return true;
};

export default isAuthenticated;