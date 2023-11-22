import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-server-lake-two.vercel.app',
})

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic