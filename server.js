


const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server is now listening to PORT ${PORT}`);
});
