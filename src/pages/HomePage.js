import React, { useState, useEffect } from "react";
import { Alert, Box, Container, Stack } from "@mui/material";
import ProductFilter from "../components/ProductFilter";
import ProductSearch from "../components/ProductSearch";
import ProductSort from "../components/ProductSort";
import ProductList from "../components/ProductList";
import { FormProvider } from "../components/form";
import { useForm } from "react-hook-form";
import apiService from "../app/apiService";
import orderBy from "lodash/orderBy";
import LoadingScreen from "../components/LoadingScreen";
import MKPagination from "components/MKPagination";
import Icon from "@mui/material/Icon";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [error, setError] = useState("");

  const defaultValues = {
    school: [],
    time: "All",
    priceRange: "",
    sortBy: "featured",
    searchQuery: "",
  };
  const methods = useForm({
    defaultValues,
  });
  const { watch, reset } = methods;
  const filters = watch();
  // const filterProducts = applyFilter(products, filters);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        // const res = await apiService.get("/data");
        setProducts([{
          "id": "e2d94bbf-0530-425a-a1ed-3177c5822c4e",
          "title": " Căn Hộ MiNi full nội thất ngay Đại Học Ngân Hàng ",
          "price": "4.5 triệu/tháng",
          "squareInArea": "25m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "08/10/2022",
          "postSummary": "️ Giá thuê : 4,5tr . 5tr ️ Địa chỉ : 68 đường số 9 , phường Linh Trung , Quận Thủ Đức .Nhà ngay Trung Tâm Thủ Đức , gần trường ĐH Ngân Hàng , ĐH Sư…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/10/08/received-5400905793259001_1665218113.jpg"
        },
        {
          "id": "166cfa39-4310-46c4-9f18-20a458e4e412",
          "title": " Cho thuê chung cư mini trung tâm SG, khu an ninh, có sân vườn thoáng mát, giá chỉ … ",
          "price": "2.2 triệu/tháng",
          "squareInArea": "32m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "05/10/2022",
          "postSummary": "Vị trí: Số 16/2 Đường số 44, Phường Hiệp Bình Chánh, Quận Thủ Đức (gần Chợ Hiệp Bình)Thuộc khu vực trung tâm Thành phố Sài Gòn, với Đại lộ…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/10/05/20191027-112111-01_1664982032.jpg"
        },
        {
          "id": "19aae5d5-30b3-4c38-901a-73f7ae3f7e44",
          "title": " Cho thuê phòng trọ quận Thủ Đức yên tĩnh, thoáng mát ",
          "price": "3 triệu/tháng",
          "squareInArea": "20m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "04/10/2022",
          "postSummary": "Mình còn 1 phòng trong nhà nguyên căn ở quận thủ Đức,(ưu tiên ở 1 mình) cuối tháng 10/2022 bạn thuê phòng chuyển về nước nên cho thuê lại phòng rộng 20m2…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2019/09/29/9cb32c32-f6dc-4670-b27b-d3f832fd26e0_1569734806.jpg"
        },
        {
          "id": "16f1f024-d7d2-495a-bafd-2d032b7bfe46",
          "title": " Phòng cho thuê hoặc ở ghép riêng tư - gần HUB, UTE, ĐH Kiến Trúc, Cao Đẳng… ",
          "price": "1.8 triệu/tháng",
          "squareInArea": "40m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "04/10/2022",
          "postSummary": "Cho thuê 3 phòng lầu 1 đầy đủ nội thất, nhà biệt thự đẹp, cực mát, toàn bộ các phòng đều có view sân vườn, thoáng mát, xe ô tô vào tận nhà.Gần…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/10/04/ban-cong-phong_1664819273.jpg"
        },
        {
          "id": "aaea9eeb-cbd5-48f4-8391-bef8826fe01b",
          "title": " KTX NAM Ngay ĐH SPKT, Ngân Hàng, Hutech Ngay Ngã Tư Thủ Đức - Nhà mới Xây 100%… ",
          "price": "1.9 triệu/tháng",
          "squareInArea": "50m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "30/09/2022",
          "postSummary": "KTX NAM MỚI XÂY xong cho Sinh viên với các tiện ích bao trọn gói- Tất cả thiết bị mới 100%- Miễn phí tiền điện, nước, wifi, máy lọc nước, máy lạnh,…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/09/03/601f6dfa1d59d8078148_1662199030.jpg"
        },
        {
          "id": "42e6db14-2fbb-41cb-aa31-4d7cc33556ff",
          "title": " Share lại phòng trong nhà nguyên căn đối diện Gigamall. Liên hệ: 0934062730 ",
          "price": "2.2 triệu/tháng",
          "squareInArea": "75m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "22/09/2022",
          "postSummary": "[SHARE PHÒNG TRONG NHÀ NGUYÊN CĂN ĐỐI DIỆN GIGAMALL - TẶNG NGAY 200k]-Phòng trong ngà nguyên căn đường 47 HBC, qua Gigamall chưa tới 5ph, thích hợp di chuyển Thủ…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/09/22/3e41050a-e203-4a7e-a6dc-5124d042ec7f_1663805095.jpg"
        },
        {
          "id": "9927fbaf-0553-4ad1-bc4e-6c9acdbf63dd",
          "title": " KTX Nam mới xây gần Làng ĐH, ĐH Quốc tế, Nông lâm, CNTT ngay tuyến xe bus vào… ",
          "price": "1.7 triệu/tháng",
          "squareInArea": "30m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "20/09/2022",
          "postSummary": "KTX Nam Dành cho Sinh viên, Mới xây xong, mới 100% hếtCực kỳ sạch sẽ, có người dọn vệ sinh hàng ngày từ trong ra ngoài.Nhà ngay tuyến xe Bus 104 đi đến…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/09/20/z3735730457603-d4a80e0a4ca7787b623e7d229672fdd4_1663667444.jpg"
        },
        {
          "id": "0c113806-7f4e-4db9-b017-dfcec1171992",
          "title": " Phòng trọ/CHDV có nội thất 686 QL13 gần Đại học Luật Thủ Đức, Khu đô… ",
          "price": "4 triệu/tháng",
          "squareInArea": "30m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "20/09/2022",
          "postSummary": "Phòng trọ/CHDV có nội thất 686 QL13 gần Đại học Luật Thủ Đức, Khu đô thị Vạn Phúc, p. Hiệp Bình Phước Thủ Đức Giá rẻ: 3,5 triệu - 4 triệu - 4,5…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/09/12/3282c9a2-4ceb-47c6-b92b-4915fdcb3c4a_1662956044.jpg"
        },
        {
          "id": "038f7436-8365-4275-a05f-1d19afe681c6",
          "title": " Full Nội Thất, bao trọn gói Ngay Khu công nghệ cao - ĐH FPT, GTVT KTX dành cho Nam ",
          "price": "1.5 triệu/tháng",
          "squareInArea": "29m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "19/09/2022",
          "postSummary": "Nhà Ngay ĐH GTVT, viện SPKT, ĐH FPT, Hutech, Khu công nghệ caoKý túc xá NAM cao cấp bao trọn gói, Miễn phí tiền điện, tiền nước, tiền internet, vệ sinh hàng…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/10/02/e187382ee65715094c4611_1633164618.jpg"
        },
        {
          "id": "098db36c-69f9-4664-b92d-7269adf12c55",
          "title": " KTX NAM CAO CẤP MỚI XÂY 100% GẦN ĐH NGÂN HÀNG, HUTECH, CAO ĐẲNG THỦ ĐỨC, SPKT, FPT ",
          "price": "1.4 triệu/tháng",
          "squareInArea": "80m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "16/09/2022",
          "postSummary": "KTX nam MỚI 100%, NGAY HD2, GẦN SPKT, NGÂN HÀNG NHÀ MỚI KHAI TRƯƠNG, MỌI THỨ ĐỀU MỚI 100%%. Ưu đãi cực sốc cho 20 bạn đầu tiên đăng kí. TẶNG VOUCHER…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/08/27/z3676031553838-f3eb7ced974ed2809ddec7816de75a27_1661587947.jpg"
        },
        {
          "id": "8f2356ff-4427-4fef-b937-68eeabff60df",
          "title": " KHU NHÀ TRỌ CÓ 60 PHÒNG MỚi XÂY SẠCH SĒ.AN NINH.GẦN CẦU ÔNG DẦU - QL.13-THỦ… ",
          "price": "2.6 triệu/tháng",
          "squareInArea": "25m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "07/09/2022",
          "postSummary": "KHU NHÀ TRỌ CÓ 60 PHÒNG.MỚi XÂY SẠCH SẼ.AN NINH,GẦN CẦU ÔNG DẦU-QL.13- THỦ ĐỨC, GẦN ĐH LUẬTDiện tích:25m2- Có hệ thống camera toàn bộ khu nhà- Có…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2018/08/12/3568689abbb85ae603a9_1534083209.jpg"
        },
        {
          "id": "9b3897f7-d15c-4269-b42c-ab54a10dab72",
          "title": " PHÒNG TRỌ CAO CẤP, 3.2 triệu/ 1 phòng, Lh Cô Vân 0392251939 ",
          "price": "3.2 triệu/tháng",
          "squareInArea": "25m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "05/09/2022",
          "postSummary": "PHÒNG 4x4, WC riêng 1,2 x 2m, có máy giặt, tủ lạnh sử dụng chung ở tầng trệt . Đường Số 12 Trường Thọ Thủ Đức, gần Phạm Văn Đồng, Gần Chợ Thủ…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2020/10/16/d21b5f70-3280-4760-93f2-f13b2d599cb0_1602840270.jpg"
        },
        {
          "id": "b6c15800-e7f6-40fc-998a-a4870b560174",
          "title": " Phòng trọ cao cấp cho thuê có gác lửng VIP cho các bạn sinh viên ",
          "price": "2.6 triệu/tháng",
          "squareInArea": "32m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "05/09/2022",
          "postSummary": "CHO THUÊ PHÒNG TRỌ TẠI THÀNH PHỐ THỦ ĐỨC - CÓ TỦ BẾP MẶT ĐÁ, WC RIÊNG- GÁC LỬNG , FREE WIFI - ƯU TIÊN CÁC BẠN SINH VIÊN Địa chỉ: Số 31/15…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2019/03/31/1_1554024016.jpg"
        },
        {
          "id": "9c77d48b-6171-4b44-aa57-dd2345349cda",
          "title": " Ở GHÉP dạng Homestay Cao cấp bao trọn full tiện nghi Ngay gần ngã 4 Thủ Đức -… ",
          "price": "1.8 triệu/tháng",
          "squareInArea": "50m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "03/09/2022",
          "postSummary": "Tìm bạn NAM ở ghép, Miễn phí tiền điện, tiền nước, tiền internet, vệ sinh hàng ngày, máy giặt,,…Nhà Gần ngã tư thủ đức, ĐH Sư Phạm Kỹ Thuật, ĐH…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/03/07/75b649b35790a8cef1815_1615115348.jpg"
        },
        {
          "id": "23e31b36-edb7-483f-98ee-a127b825ed55",
          "title": " Cho thuê phòng trọ, 24m2 Khu nhà thờ Fatima, Bình Triệu, Hiệp Bình Chánh, Thủ… ",
          "price": "3 triệu/tháng",
          "squareInArea": "24m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "03/09/2022",
          "postSummary": "Cho thuê phòng trọ, 24m2Khu nhà thờ Fatima, Bình Triệu, Hiệp Bình Chánh, Thủ Đức3 triệu/tháng. Miễn tiếp trung gian, môi giớiLiên hệ: 0909 009 803 (cô Hoa,…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/09/03/img-9789_1662185761.jpg"
        },
        {
          "id": "54a32373-0a15-4630-b30b-4b5fa6ce7f74",
          "title": " Cho thuê phòng cực kì rộng rãi thoáng mát gần chợ Hiệp Bình Thủ Đức ",
          "price": "4 triệu/tháng",
          "squareInArea": "30m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "30/08/2022",
          "postSummary": "Cho thuê phòng trọ mới xây, sạch sẽ cực rộng rãi mát mẻKHÔNG TIẾP TRUNG GIAN, CÒ GIỚI THIỆU VUI LÒNG BỎ QUA!!!Liên hệ trực tiếp cô Thuỷ (Quản lý ở…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/08/30/20220829-201152_1661838941.jpg"
        },
        {
          "id": "72ca3d9e-2bb3-4434-81f4-c66c140476b1",
          "title": " Tìm 1 nam ở ghép gần gigamall phạm văn đồng ",
          "price": "2 triệu/tháng",
          "squareInArea": "25m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "30/08/2022",
          "postSummary": "Phòng sạch sẽ, thoáng, gần cầu Bình Triệu, giờ giấc tự do, WCR, lối đi riêng, hẻm xe hơi, gần chợ, siêu thị, bến xe đi lại thuận tiện.Đang thiếu…",
          "imageLink": "https://phongtro123.com/img/thumb_default.jpg"
        },
        {
          "id": "0f24875a-f084-4ba5-bd54-fa1c1cf6e3ec",
          "title": " Phòng Trọ Có Gác, Studio Gần Spkt Cao Đẳng Công Nghệ Thủ Đức ",
          "price": "4 triệu/tháng",
          "squareInArea": "30m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "27/08/2022",
          "postSummary": "CỰC HOT!! PHÒNG TRỌ GẦN CĐ CÔNG NGHỆ THỦ ĐỨC, SPKT, ĐH NGÂN HÀNGKHÔNG GIAN SỐNG LÝ TƯỞNG MÀ BẠN KHÔNG THỂ BỎ QUAToạ lạc: Kha Vạn Cân, p.Linh Đông,…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/08/25/img-20220825-172318_1661424451.jpg"
        },
        {
          "id": "83ddb05d-5fae-4fa9-99b7-a402d2200b1f",
          "title": " PHÒNG MỚI STUDIO, CÓ GÁC CAO M7 GẦN CAO ĐẲNG CÔNG NGHỆ TPHCM ",
          "price": "3.9 triệu/tháng",
          "squareInArea": "27m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "27/08/2022",
          "postSummary": "⭐️CHO THUÊ PHÒNG TRỌ SINH VIÊN GIÁ RẺ GẦN CAO ĐẲNG CÔNG NGHỆ TPHCM ,CÁCH 2PH RA PHẠM VĂN ĐỒNG ⭐️Ở TỪ 3 -4 BẠN THOẢI MÁI , SINH VIÊN CÓ THỂ BOOK NGAY…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/08/25/62767970-9a03-4e3d-8c68-d13544ff10a5_1661418492.jpg"
        },
        {
          "id": "fc1c23dc-c8f4-4cb8-8df0-7051e04c50b2",
          "title": " Nhà Mới Xây - Cho Thuê Phòng Cao Cấp - Máy Lạnh Tủ bếp - Vân Tay -Camera - An… ",
          "price": "3.1 triệu/tháng",
          "squareInArea": "25m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "26/08/2022",
          "postSummary": "Ngày 1/7 hoàn thiện căn nhà cao cấp - an ninh️ Địa chỉ: 689/19 Tô Ngọc Vân, Tam Bình, Thủ Đức ( gần Khu Bệnh viện thủ đức 1km ). ️ Diện tích…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/06/21/6f8d4584-c1b3-4698-aac9-dacec117a9a1_1655804184.jpg"
        },
        {
          "id": "215a0b0e-91f3-4a4d-9595-5b54b7658028",
          "title": " CHO THUÊ PHÒNG MỚI XÂY SẠCH SẼ, HIỆN ĐẠI, CÓ HẦM XE + THANG MÁY, BẢO VỆ… ",
          "price": "2.8 triệu/tháng",
          "squareInArea": "16m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "Hôm nay",
          "postSummary": "Cho thuê CĂN HỘ MINI MỚI XÂY tại : 39 - 41 Đường số 17, Phường Hiệp Bình Chánh, Quận Thủ Đức (gần GigaMall)Mô tả :+ Nhà mới xây rộng rãi, sạch…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/10/20/mat-tien-nha_1666259967.jpg"
        },
        {
          "id": "75971588-35ce-4c22-83dc-cca6de63e317",
          "title": " Phòng cửa sổ THOÁNG MÁT. Ngay trường ĐH SPKT, Ngân Hàng, Nông Lâm, FPT, Hutech,… ",
          "price": "3.5 triệu/tháng",
          "squareInArea": "18m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "Hôm nay",
          "postSummary": "__ PHÒNG GẦN NGÃ TƯ THỦ ĐỨC, TRƯỜNG ĐH SPKT, ĐH NGÂN HÀNG, HOÀNG DIỆU 2, KHA VẠN CÂN,…. Phòng thoáng mát.Diện tích tầm 18m2 (ở đc 2 - 3 người).…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/10/21/f7b370d0-08c8-45cc-8d70-55e1587d5520_1666321800.jpg"
        },
        {
          "id": "3826c415-6594-4e28-8922-41d29f20fbcc",
          "title": " Cho nữ thuê phòng trong nhà nguyên căn ở đường sô 6, Bình Chiểu, Thủ Đức ",
          "price": "3 triệu/tháng",
          "squareInArea": "25m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "1 ngày trước",
          "postSummary": "PHÒNG CHỈ CHO NỮ THUÊ️Còn 1 phòng duy nhất , giá thuê 3tr/ 1tháng , hỗ trợ cọc cho mấy bạn sinh viênTrong phòng có : Máy lạnh. Rèm. Tủ quần áo. Máy…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/10/23/96eb4d58-07c5-465b-b199-ed58cf2285ba_1666492411.jpg"
        },
        {
          "id": "cbcdb1b7-c0cc-43f7-82b2-82c49f4749c4",
          "title": " Căn hộ gần ĐH SPKT, ĐH NGÂN HÀNG, Phạm Văn Đồng - Giảm 1TR THÁNG ĐẦU ",
          "price": "5.5 triệu/tháng",
          "squareInArea": "30m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "2 ngày trước",
          "postSummary": "KHAI TRƯƠNG PHÒNG TIỆN NGHI GẦN ĐH CẢNH SÁT NHÂN DÂN- ĐH NGÂN HÀNG- SPKT- CĐ CÔNG NGHỆ THỦ ĐỨCGiá : 5.500.000-7.500.000 vnđTọa lạc: Linh Tây, Thủ…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/10/13/a86a6dac-7166-48f9-a944-4b43c4f33a40_1665637015.jpg"
        },
        {
          "id": "f120e82d-e3e7-448c-b3c7-d1d312144618",
          "title": " Căn hộ studio sức chứa lớn full nội thất ở Linh Tây - Thủ Đức ",
          "price": "5.5 triệu/tháng",
          "squareInArea": "35m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "20/10/2022",
          "postSummary": "Thời Điểm Phòng Khan Hiếm Tự Nhiên Xuất Hiện Siêu Dự Án Cực Khủng Cực ĐẹpCăn Hộ Studio Với Sức Chứa Lớn Có Thể Ở NgayTọa lạc: 100 Đường số…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/10/16/z3804086223797-71a0978b7323b11aace1c153d77d07fb_1665909954.jpg"
        },
        {
          "id": "5424633c-2852-4068-807c-b373f7a1aa78",
          "title": " Phòng trọ sạch đẹp 153/2D Võ Văn Ngân gần Vincom Thủ Đức, ",
          "price": "4.8 triệu/tháng",
          "squareInArea": "50m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "19/10/2022",
          "postSummary": "Phòng lớn 50m2 sạch đẹp gần Vincom Thủ ĐứcĐANG CÓ PHÒNG LỚN: 1 phòng khách, 1 phòng ngủ, 1 WC TẠI VÕ VĂN NGÂN CHO THUÊ – Nhà Khóa Cổng 23h. LH:…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/03/07/nha-tro-vo-van-ngan_1615111799.jpg"
        },
        {
          "id": "570c5a11-1e1f-485d-86c9-c3b37135894a",
          "title": " 1 Trệt 1 lầu 1 gác, sau lưng TTTM GiGaMall Phạm Văn Đồng Thủ ĐứcĐC: 48… ",
          "price": "5 triệu/tháng",
          "squareInArea": "50m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "18/10/2022",
          "postSummary": "1 Trệt 1 lầu 1 gác, sau lưng TTTM GiGaMall Phạm Văn Đồng Thủ ĐứcĐC: 48 đường 28, HBC, Thủ Đức Giá: 5 triệu Có sân sau riêng biệt,Phù hợp ở gia…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/10/16/ce9117fd-722a-49fa-9da7-3571c88bb456_1665896481.jpg"
        },
        {
          "id": "9c1f28f3-41fc-476a-9649-4fd0486ffbd9",
          "title": " ⭐Khai trương căn hộ full nội thất – thiết kế hiện đại ngay Linh Tây Thủ… ",
          "price": "5.5 triệu/tháng",
          "squareInArea": "30m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "17/10/2022",
          "postSummary": "⭐KHAI TRƯƠNG CĂN HỘ FULL NỘI THẤT – THIẾT KẾ HIỆN ĐẠI NGAY LINH TÂY THỦ ĐỨCGIÁ CHỈ: 5TR5 – 7TR5VỊ TRÍ: Đường số 9, Phường Linh Tây, Thành Phố…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/10/16/z3804086583061-cbffbb990fe8015ea143faab8465f805_1665909853.jpg"
        },
        {
          "id": "2fa98a88-77fc-4ca1-9864-696d5dd3fe13",
          "title": " Cho thuê phòng trọ mới xây full nội thất gần SPKT - ĐH Ngân Hàng, Phạm Văn… ",
          "price": "5.5 triệu/tháng",
          "squareInArea": "35m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "17/10/2022",
          "postSummary": "KHAI TRƯƠNG PHÒNG TIỆN NGHI GẦN ĐH CẢNH SÁT NHÂN DÂN- ĐH NGÂN HÀNG- SPKT- CĐ CÔNG NGHỆ THỦ ĐỨCGiá : 5.500.000-7.500.000 vnđTọa lạc: Linh Tây, Thủ ĐứcVài…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/10/17/z3806121427372-385cfda432e5d20765eaf872d9657ec5_1665983046.jpg"
        },
        {
          "id": "e6634500-8599-4894-ae5b-887370962d74",
          "title": " Khai trương phòng tiện nghi ngay chợ Thủ Đức, gần ĐH Ngân Hàng, SPKT ",
          "price": "5.5 triệu/tháng",
          "squareInArea": "30m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "16/10/2022",
          "postSummary": "KHAI TRƯƠNG PHÒNG TIỆN NGHI GẦN ĐH CẢNH SÁT NHÂN DÂN- ĐH NGÂN HÀNG- SPKT- CĐ CÔNG NGHỆ THỦ ĐỨCGiá : 5.500.000-7.500.000 vnđTọa lạc: Linh Tây, Thủ ĐứcVài…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/10/16/z3804086161444-cbffbb990fe8015ea143faab8465f805_1665912784.jpg"
        },
        {
          "id": "df659045-d4f1-4fc8-b2c3-c858703b20a5",
          "title": " Phòng full nội thất có ban công ngay Phạm Văn Đồng, Thủ Đức (cuối tháng 10… ",
          "price": "5.5 triệu/tháng",
          "squareInArea": "30m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "16/10/2022",
          "postSummary": "PHÒNG FULL NT- CÓ BAN CÔNG CUỐI THÁNG 10 NGAY PHẠM VĂN ĐỒNGĐịa chỉ: đường số 9, Linh Tây, Thủ Đức- Sát Phạm Văn Đồng 1phút. Kha Vạn Cân, Tô Ngọc Vân…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/10/16/1_1665911142.jpg"
        },
        {
          "id": "6c991a41-3528-475d-932f-d7c60a83b34e",
          "title": " Khai trương phòng cao cấp full nội thất diện tích lớn sát ĐH Ngân Hàng TPHCM ",
          "price": "5 triệu/tháng",
          "squareInArea": "30m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "16/10/2022",
          "postSummary": "SIÊU PHẨM CỰC HOT⭐️KHAI TRƯƠNG CĂN HỘ CAO CẤP FULL NỘI THẤT DIỆN TÍCH LỚN SÁT -ĐH NGÂN HÀNG TPHCM - KHÔNG GIỚI HẠN NGƯỜI ỞVị trí : đường số 9 ,…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/10/16/465fa16d-e0b8-4c26-b97f-6158ba2c0e6b_1665909850.jpg"
        },
        {
          "id": "e589ae6f-4762-4ce5-8c3c-1f85a535842e",
          "title": " Phòng rộng 38m2, full nội thất Gần Bệnh Viện Thủ Đức ",
          "price": "3.8 triệu/tháng",
          "squareInArea": "36m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "18/10/2022",
          "postSummary": "Phòng cực rộng gần 36m2, có ban công rất mát mẻ, có nội thất gồm Máy Lạnh, Tủ, Kệ Bếp, Máy Giặt- Ở Đường Tam Châu, đi tới Bệnh Viện Thủ Đức…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/10/20/93c174e7-c0b3-451e-ab2e-28ff836f287d_1666275331.jpg"
        },
        {
          "id": "a3eadb52-c4b6-4177-8589-f52dafecfc3c",
          "title": " Căn Trọ , Cầu Vượt Linh Xuân , Có Máy Lạnh , Giá Rẻ , Ở Ngay ",
          "price": "3 triệu/tháng",
          "squareInArea": "35m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "17/10/2022",
          "postSummary": "- Cho thuê Phòng thoáng mát , sạch sẻ với giá rẻ mà lại không thu phí dịch vụ.- Diện tích 3ư0m2 , có đầy đủ nội thất.- Gồm : Giường , Máy lạnh ,…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/08/19/z3403141445085-0dfd5edea4363038ca189b1412e3c779_1660885805.jpg"
        },
        {
          "id": "836d41f9-397d-4c80-aeec-25b56a4d5604",
          "title": " Cho nữ thuê phòng hoặc ở ghép nhà nguyên căn gần Đặng Văn Bi ",
          "price": "2.3 triệu/tháng",
          "squareInArea": "20m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "14/10/2022",
          "postSummary": "- Nhà hiện tại còn 1 phòng trống ( 20m2 ), các bạn có thể bao nguyên phòng hay ở ghép cũng được.- Có sân thượng phơi đồ.- Không chung chủ, Phòng bếp có…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/03/09/11015759-350043148524509-1910346055-n_1646794606.jpg"
        },
        {
          "id": "7096b367-f9e3-420b-8d15-1165dd4e5594",
          "title": " Phòng trọ Kha Vạn Cân, Phạm Văn Đồng. Sau lưng Trường CĐ Vinatex, Thủ Đức.… ",
          "price": "3.2 triệu/tháng",
          "squareInArea": "30m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "14/10/2022",
          "postSummary": "Phòng trọ Kha Vạn Cân, Phạm Văn Đồng. Sau lưng Trường CĐ Vinatex, Thủ Đức.⏰ ĐC: 39 Đường 34 Giá: 3,2 triệu (Free tiền xe)⭐ Bếp có: kệ chén, bồn…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/04/20/b3ee6bd6-f251-4297-8074-63a36c5f389b_1650426546.jpg"
        },
        {
          "id": "2f715af1-40f5-4976-a82f-f9dcf3313c35",
          "title": " Phòng trọ Kha Vạn Cân, Phạm Văn Đồng. Gần Trường CĐ Vinatex, Thủ Đức ",
          "price": "3.2 triệu/tháng",
          "squareInArea": "25m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "14/10/2022",
          "postSummary": "Phòng trọ Kha Vạn Cân, Phạm Văn Đồng. Gần Trường CĐ Vinatex, Thủ ĐứcGiá rẻ: 3,2 triệu Ở tối đa 3 người 2 xe Bếp có: kệ chén, bồn rửaWc riêng:…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/04/06/3a076934-cc47-4b5c-9be2-2d8dab030f0d_1649216826.jpg"
        },
        {
          "id": "d63038ca-d57b-4dcf-acd7-a6004152b114",
          "title": " NHÀ TRỌ AN NINH - SẠCH SẼ - CHẤT NHƯ CAFE. ",
          "price": "2.4 triệu/tháng",
          "squareInArea": "20m²",
          "location": "Quận Thủ Đức, Hồ Chí Minh",
          "postTime": "13/10/2022",
          "postSummary": "Nhà tro theo Mô Hình Chung Cư Bạn chán cảnh nhà trọ ẨM THẤP vào mù mưa, NÓNG CHẢY MỠ vào mùa nắng. Không gian BÍT BÙNG .Bạn luôn cảm thấy ko AN TOÀN…",
          "imageLink": "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/10/20/img-20211018-151710_1634696442.jpg"
        }]);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    getProducts();
  }, []);

  return (
    <Container sx={{ display: "flex", minHeight: "100vh", mt: 3 }}>
      <Stack>
        <FormProvider methods={methods}>
          <ProductFilter  />
        </FormProvider>
        
      </Stack>
      <Stack sx={{  }}>
        <FormProvider methods={methods}>
          <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ sm: "center" }}
            justifyContent="space-between"
            mb={2}
          >
            <ProductSearch />
            <ProductSort />
          </Stack>
        </FormProvider>
        <MKPagination size="medium">
          <MKPagination item>
            <Icon>keyboard_arrow_left</Icon>
          </MKPagination>
          <MKPagination item active>
            1
          </MKPagination>
          <MKPagination item>2</MKPagination>
          <MKPagination item>3</MKPagination>
          <MKPagination item>
            <Icon>keyboard_arrow_right</Icon>
          </MKPagination>
        </MKPagination>
        <Box sx={{ position: "relative", height: 1 }}>
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              {error ? (
                <Alert severity="error">{error}</Alert>
              ) : (
                <ProductList products={products} />
              )}
            </>
          )}
          
        </Box>
        
      </Stack>
      
    </Container>
  );
}

// function applyFilter(products, filters) {
//   const { sortBy } = filters;
//   let filteredProducts = products;

//   // SORT BY
//   if (sortBy === "featured") {
//     filteredProducts = orderBy(products, ["sold"], ["desc"]);
//   }
//   if (sortBy === "newest") {
//     filteredProducts = orderBy(products, ["createdAt"], ["desc"]);
//   }
//   if (sortBy === "priceDesc") {
//     filteredProducts = orderBy(products, ["price"], ["desc"]);
//   }
//   if (sortBy === "priceAsc") {
//     filteredProducts = orderBy(products, ["price"], ["asc"]);
//   }

//   // FILTER PRODUCTS
//   if (filters.school.length > 0) {
//     filteredProducts = products.filter((product) =>
//       filters.school.includes(product.school)
//     );
//   }
//   if (filters.time !== "All") {
//     filteredProducts = products.filter(
//       (product) => product.time === filters.time
//     );
//   }
//   if (filters.priceRange) {
//     filteredProducts = products.filter((product) => {
//       if (filters.priceRange === "below") {
//         return product.price < 25;
//       }
//       if (filters.priceRange === "between") {
//         return product.price >= 25 && product.price <= 75;
//       }
//       return product.price > 75;
//     });
//   }
//   if (filters.searchQuery) {
//     filteredProducts = products.filter((product) =>
//       product.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
//     );
//   }
//   return filteredProducts;
// }

export default HomePage;
