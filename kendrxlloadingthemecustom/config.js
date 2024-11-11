const Config = {
    Options: {
        SeverName: "Ow3ned by kendrxl", // Server name
        ThemeColor: "#800020", // Theme color
        TextColor: "#fff", // Font color
        Tips: {
            enable: true,
            Tips: ["Welcome To Ow3ned by kendrxl"],
            ChangeTipAfter: 3000 // In MS
        },
        Accounts: [
            {
                icon: "fa-brands fa-github fa-bounce", // https://fontawesome.com/icons
                link: "https://github.com/Croupieraigrie" // link or #
            },
            {
                icon: "fa-brands fa-discord fa-shake", // https://fontawesome.com/icons
                link: "https://discord.gg/KZYdhqBa" // link or #
            },
            {
                icon: "fa fa-laptop-code fa-beat-fade", // https://fontawesome.com/icons
                link: "<https://discord.com/users/835861948742500372>" // link or #
            }
        ],
        ChangeLog: {
            enable: true,
            New: [
                "meow meow meow",
            ],
            Removed: [
                "black people",
                "cat"
            ],
            UpComing: [
                "more cat",
                "less black people"
            ]
        }
    },
    BG: {
        Type: "Video", // BG | Video | YT,
        IMGs: ["assests/BG/BG1.png", "assests/BG/BG2.jpg", "assests/BG/BG3.jpg", "assests/BG/BG4.jpg"], // If Type = BG insert imgs paths or link
        Link: "assests/Os/Video.mp4", // If Type = Video insert Video path or link 
        VideoID: "7ExgFMvN9TY", // if Type = YT insert Video id
        ChangeImgAfter: 3000, // In MS
        Sparks: { // Small sparks floating
            enable: true,
            Density: 250, // Number of sparks
            Color: "#ff0000", // Color of sparks
            Direction: "top" // top | bottom | left | right | none
        }
    },
    Sounds: {
        Volume: 50, // 0 - 100
        AlbumSongs: [
            {
                name: "ERA  - Ameno", // Song Title
                src: "assests/media/song.mp3" // Song Path or link
            },
        ],
    }
}