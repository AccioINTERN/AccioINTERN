const fetch = require('node-fetch');
const { GITHUB_TOKEN, GITHUB_ORG } = process.env;

module.exports = async (req, res) => {
    const { username } = req.body;

    try {
        const response = await fetch(`https://api.github.com/orgs/${GITHUB_ORG}/invitations`, {
            method: 'POST',
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ invitee_id: username }),
        });

        if (response.ok) {
            res.status(200).json({ message: `Invitation sent to ${username}` });
        } else {
            const error = await response.json();
            res.status(response.status).json({ message: error.message });
        }
    } catch (error) {
        console.error('Error sending invitation:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
