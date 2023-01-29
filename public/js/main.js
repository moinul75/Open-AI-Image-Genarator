

function onSubmit(e){
    e.preventDefault();
    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';

    //now get prompt and size 
    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;

    //condition of submission 
    if(prompt === '')
    {
        alert('Please add some text of your Image');
        return ;
    }
    genarateImageRequest(prompt,size);
}
async function genarateImageRequest(prompt,size)
{
    try {
        showSpinner();
        //factch request 
        const response = await fetch('/openai/genarateimage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt,
                size
            })
        });

        if(!response.ok){
            removeSpinner();
            throw new Error('That image could not be genarated');
            
        }
        const data = await response.json();
        // console.log(data);
        //show the Image on UI
        const imageUrl = data.data;
        document.querySelector('#image').src = imageUrl;
        removeSpinner();
        
    } catch (error) {
        document.querySelector('.msg').textContent = error;
        
    }

}
//now getting the requst genarate spinner loading 
function showSpinner()
{
    document.querySelector('.spinner').classList.add('show');
}
//after finding response remove the spinner
function removeSpinner()
{
    document.querySelector('.spinner').classList.remove('show');
}

document.querySelector('#image-form').addEventListener('submit',onSubmit)