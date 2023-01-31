function a(){
    
    for (let i=0; i< a[n-1];i++){
        let dem=0;
        for (let j=0;j<a[n-1];j++){
            if (a[i]==a[j])
            dem++;
        }
        if (dem>n/2)
        return a[i]
    }
}