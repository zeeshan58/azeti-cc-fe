import * as React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import { UserEntity, createEmptyUser } from "../model/User";
import * as EmailValidator from 'email-validator';
import { toast } from 'react-toastify';

interface PropsForm {
  onUser ?: (user : UserEntity) => void;
}

const useFormStyles = makeStyles((theme) =>
  createStyles({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "auto",
      width: "50%",
      padding: "10px"
    },
    AvatarContainer: {
      margin: "auto",
      padding: "10px"
    }
  })
);

export const Profile: React.FC<PropsForm> = (props) => {
  
  function onSave(userInfo) {
    if(!EmailValidator.validate(userInfo.email)){
      toast.error("Please enter the valid email address");
    }
    else if(EmailValidator.validate(userInfo.email)&& isNaN(userInfo.username)){
      console.log(userInfo);  
    }
    else{
      toast.error("Both Email and User Name are required.");
    }
  }
  const [userInfo, setUserInfo] = React.useState<UserEntity>(
    createEmptyUser()
  );
  const classes = useFormStyles();
  const onTexFieldChange = (fieldId) => (e) => {
    setUserInfo({
      ...userInfo,
      [fieldId]: e.target.value,
    });
  };

  return (
    <div className={classes.formContainer}>
      <Avatar className={classes.AvatarContainer} alt="Avatar">AZ</Avatar>
      <TextField
        label="Email"
        margin="normal"
        value={userInfo.email}
        onChange={onTexFieldChange("email")}
      />
      <TextField
        label="User Name"
        type="username"
        margin="normal"
        value={userInfo.username}
        onChange={onTexFieldChange("username")}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSave(userInfo)}
      >
        Save
      </Button>
    </div>
  );
};