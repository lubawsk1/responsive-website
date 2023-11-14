const sr = ScrollReveal({
    origin:"bottom",
    distance:"100px",
    duration:2000,
    reset:false,
});

sr.reveal(
    `
    nav,.home-container,.image-conainer,.features,#service1,#service2,#service3,.pricing-plan,footer
    `,{
        interval:200,
    }
)