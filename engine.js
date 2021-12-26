const allowed_chain = [80001, 80002];
const serverUrl = "https://luv1eclsbqcq.usemoralis.com:2053/server";
const appId     = "Cw0Gh2cpXPAlc1PRkzj2EQx0Ed9r6CuWeTNa0xMN";
Moralis.start({ serverUrl, appId });
let contract = '';
let isrevealed = false;
let NFTname, presaleMaxSupply, publicSaleMaxSupply, currentSale, totalSupply, maxSupply, addressMintedBalance, symbol, presaleStartTime, nftPerAddressLimit, can_mint_amount = '';
const address = '0xfA5F0e147d69302dc3d4C06DC56766f88F9E424f';
const ABI = [{"inputs":[{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"string","name":"_initNotRevealedUri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipPreSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipPublicSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"presaleMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"publicMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"setNftPerAddressLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setOnlyWhitelisted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startPresale","type":"uint256"}],"name":"setPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setPresaleMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startPublicsale","type":"uint256"}],"name":"setPublicsale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setPublicsaleMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_walletAddresses","type":"address[]"}],"name":"setWhitelisted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"whitelistMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_NFTs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintPricePresale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintPricePublic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintPriceWhitelisted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onlyWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleactive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleMaxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicsaleactive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSaleMaxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicsaleStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"whitelistedAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

// INIT CONNECT WALLET
async function initApp(){
    currentUser = await Moralis.User.current();
    if(!currentUser){
        currentUser = await Moralis.Web3.authenticate();
        if(currentUser){
            signed_user();
        }
    }else{
        currentUser = await Moralis.User.current();
    }
}
// INIT CONNECT WALLET

// ENABLE WEB3
async function enable_web3(){

    const web3  = await Moralis.enableWeb3();
    accounts    = await web3.eth.getAccounts();
    chainID     = await web3.eth.getChainId();
    contract    = await new web3.eth.Contract(ABI, address);
    methods     = contract.methods;
    
    console.log('methods', methods);

    methods.name().call(function(error, result){
        NFTname = result;
        $('.NFTname').html(NFTname);
    });

    methods.symbol().call(function(error, result){
        NFTsymbol = result;
        $('.NFTsymbol').html(NFTsymbol);
    });

    methods.presaleMaxSupply().call(function(error, result){
        presaleMaxSupply = result;
        $('.presaleMaxSupply').html(presaleMaxSupply);
    });

    methods.totalSupply().call(function(error, result){
        totalSupply = result;
        $('.totalSupply').html(totalSupply);
    });

    methods.MAX_NFTs().call(function(error, result){
        maxSupply = result;
        $('.maxSupply').html(maxSupply);
    });

    methods.addressMintedBalance(accounts[0]).call(function(error, result){
        addressMintedBalance = result;
        $('.addressMintedBalance').html(addressMintedBalance);
    });

    methods.presaleStartTime().call(function(error, result){
        presaleStartTime = result;
        if(presaleStartTime == '0'){
            $('.presaleStartTime').html('Date Not Revealed Yet.');
        }else{
            $('.presaleStartTime').html(new Date(presaleStartTime*1000));
        }
    });

    methods.nftPerAddressLimit().call(function(error, result){
        nftPerAddressLimit = result;
        $('.nftPerAddressLimit').html(nftPerAddressLimit);
        can_mint_amount = (nftPerAddressLimit - addressMintedBalance);
        console.log('How Many Can I Mint?', can_mint_amount);
        if(can_mint_amount == 0 || can_mint_amount == 'NaN'){
            $('.hide_if_all_minted').hide();
            $('.nft_field').attr('max', can_mint_amount);
            $('.nft_field').attr('min', can_mint_amount);
        }else{
            $('.hide_if_all_minted').show();
            $('.nft_field').attr('max', can_mint_amount);
            $('.nft_field').attr('min', '1');
        }
    });

    methods.mintPricePresale().call(function(error, result){
        mintPricePresale = result;
        mintPricePresale = web3.utils.fromWei(mintPricePresale, 'ether');
        $('.mintPricePresale').html(mintPricePresale);
    });

    methods.revealed().call(function(error, result){
        console.log(result);
        isrevealed = result;
        if(isrevealed == true){
            $('.reveal_status_button').hide();
        }
    });
    
    if(accounts[0] != '' && typeof accounts[0] !== 'undefined'){

        if( jQuery.inArray( chainID, allowed_chain ) !== -1 ){
            $('.mint_wrap_error').hide();
            $('.mint_wrap').show();
        }else{
            $('.mint_wrap_error').show();
            $('.mint_wrap').hide();
        }

    }

}
// ENABLE WEB3

// SIGNED USER
async function signed_user(){
    currentUser = await Moralis.User.current();
    if(currentUser){
        enable_web3();
    }
}
signed_user();
// SIGNED USER

initApp();

$('.reveal_status_button').click(function(){
    methods.reveal().send(
        {
            from: accounts[0]
        }
        ).then(function(result){
        console.log(result);
    });
});

$('.mint').click( async function(){
    if(can_mint_amount == 0 || can_mint_amount == 'NaN'){
        alert('Already Minted Limits.');
    }else{
        var nfts = $('.nft_field').val();
        var total = (mintPricePresale * nfts);
        const web3  = await Moralis.enableWeb3();
        methods.presaleMint(nfts).send({
            from:   accounts[0],
            value:  web3.utils.toWei( total.toString() , "ether")
        }).then(function(result){
            console.log(result);
        });
    }
});

$('.swap_presale').click(function(){
    methods.flipPreSale().send({
        from:   accounts[0],
    }).then(function(result){
        console.log(result);
    });
});

$('.swap_presale_date').click(function(){
    methods.setPresale('1640482241').send({
        from:   accounts[0],
    }).then(function(result){
        console.log(result);
    });
});

Moralis.onAccountsChanged( async (accounts) => {
    signed_user();
});

Moralis.onChainChanged( async (chain) => {
    signed_user();
});

// LOG OUT
async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
}
// LOG OUT
$('.logout_metamask').click(function(){
    logOut();
});