import { IconButton, Text } from "@chakra-ui/react";
import { BsTicketPerforated } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ProfileModal } from "../../ProfileModal";

export const NavLink = (props) => {
  return (
    <>
      <Link to={"/findevent"}>
        <Text
          display={props.display}
          fontWeight={"bold"}
          _hover={{ color: "#fca311" }}
        >
          FIND EVENT
        </Text>
      </Link>
      <Link to={"/createevent"}>
        <Text
          display={props.display}
          fontWeight={"bold"}
          _hover={{ color: "#fca311" }}
        >
          CREATE EVENT
        </Text>
      </Link>
      <Text
        fontWeight={"bold"}
        display={props?.isLogin ? "none" : "block"}
        _hover={{ color: "#fca311" }}
      >
        <Link to={props?.isLogin ? "/cart" : "/signup"}>
          {props?.isLogin ? (
            <IconButton
              fontSize={"1.5em"}
              bgColor={"transparent"}
              _hover={{
                bgColor: "tranparent",
              }}
            >
              <BsTicketPerforated />
            </IconButton>
          ) : (
            "SIGN UP"
          )}
        </Link>
      </Text>
      <Text
        fontWeight={"bold"}
        _hover={{ color: "#fca311" }}
      >
        <Link to={props?.isLogin ? "" : "/login"}>
          {props?.isLogin ? <ProfileModal /> : "LOGIN"}
        </Link>
      </Text>
    </>
  );
};
