import MessageIcon from '@material-ui/icons/Message';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleIcon from '@material-ui/icons/People';
import AppsIcon from '@material-ui/icons/Apps';

export const sidebarItems = [
    {
        icon: <MessageIcon />,
        text: "Thread"
    },
    {
        icon: <CardMembershipIcon />,
        text: "All DMs"
    },
    {
        icon: <DraftsIcon />,
        text: "Mentions & Reactions"
    },
    {
        icon: <BookmarkBorderIcon />,
        text: "Save Items"
    },
    {
        icon: <PeopleIcon />,
        text: "Peoples & Groups"
    },
    {
        icon: <AppsIcon />,
        text: "More"
    }
]