import moment from "moment";

export const formatDate = (date: Date, format = `DD MMM YYYY`) => moment(date).format(format)