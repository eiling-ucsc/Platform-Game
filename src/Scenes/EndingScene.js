class EndingScene extends Phaser.Scene {
    constructor() {
        super('EndingScene');
    }

    create() {
        // Display the ending screen text or graphics
        const endingText = this.add.text(400, 250, 'Congratulations, You Won!', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        const playAgainText = this.add.text(400, 350, 'Press R to play again', { fontSize: '24px', fill: '#fff' }).setOrigin(0.5);
        this.input.keyboard.on('keydown-R', () => {
            // Restart the Platformer scene
            this.scene.start('platformerScene');
        });
    }
}