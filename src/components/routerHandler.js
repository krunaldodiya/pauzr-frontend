
     const handler=(type,screen) => {
       switch(type){
           case "push":
                this.props.navigation.push(screen);
                break;
            case "navigate":
                this.props.navigation.navigate(screen);
            case "goBack":
                this.props.navigation.goBack();
            default:
                this.props.navigation.push(screen);            

       }     
    }; 
    export{handler};   
