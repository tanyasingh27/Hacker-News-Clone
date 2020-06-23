export const mapTime = (timestamp) => {
    const secs = Math.floor((new Date() - timestamp*1000)/1000);

    //years
    let interval = Math.floor(secs/31536000);
    if(interval > 1){
        return `${interval} years ago`;
    }

    //months
    interval = Math.floor(secs/2592000);
    if(interval > 1){
        return `${interval} months ago`;
    }

    //days
    interval = Math.floor(secs/86400);
    if(interval > 1){
        return `${interval} days ago`;
    }

    //hours
    interval = Math.floor(secs/3600);
    if(interval > 1){
        return `${interval} hours ago`;
    }

    //minutes
    interval = Math.floor(secs/60);
    if(interval > 1){
        return `${interval} minutes ago`;
    }

    //seconds
    return `${Math.floor(secs)} seconds ago`;
};