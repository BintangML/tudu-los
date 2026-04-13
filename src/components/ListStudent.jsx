import { useSelector, useDispatch } from "react-redux";
import { removeStudent } from "../features/student/studentSlice";

const ListStudent = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>List Siswa</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Alamat</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.nama}</td>
              <td>{s.kelas}</td>
              <td>{s.alamat}</td>
              <td>
                <button onClick={() => dispatch(removeStudent(s.id))}>
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListStudent;