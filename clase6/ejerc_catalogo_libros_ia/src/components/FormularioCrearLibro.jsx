import { useForm } from "react-hook-form";

const FormularioCrearLibro = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data) =>{
        console.log(data);
    }
    return (
        <>
            <form className="formulario-libro" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="titulo">Titulo</label>
                    <input type="text" id="titulo" {...register("titulo", {required: true})} />
                    {errors.titulo && <p>Este campo es obligatorio</p>}
                </div>
                <div>
                    <label htmlFor="autor">Autor</label>
                    <input type="text" id="autor" {...register("autor", {required: true})} />
                    {errors.autor && <p>Este campo es obligatorio</p>}
                </div>
                <div>
                    <label htmlFor="precio">Precio</label>
                    <input type="number" id="precio" {...register("precio", {required: true})} />
                    {errors.precio && <p>Este campo es obligatorio</p>}
                </div>
                <div>
                    <label htmlFor="sipnosis">Sipnosis</label>
                    <input type="text" id="sipnosis" {...register("sipnosis", {required: true})} />
                    {errors.sipnosis && <p>Este campo es obligatorio</p>}
                </div>
                <div>
                    <label htmlFor="categoria">Categoría</label>
                    <input type="text" id="categoria" {...register("categoria", {required: true})} />
                    {errors.categoria && <p>Este campo es obligatorio</p>}
                </div>
                <button type="submit">Crear Libro</button>
            </form>
        </>
    )
}

export default FormularioCrearLibro;