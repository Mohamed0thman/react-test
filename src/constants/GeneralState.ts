import StatusEnum from "constants/StatusEnum";

interface GeneralState {
  errors?: string[];
  status: StatusEnum;
}

export default GeneralState;
