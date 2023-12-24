/**
 * Getting Accounts
 */



async function Do(){
// window.ethereum
    const accounts = await ethereum.request({ method: 'eth_accounts' });
}


Do()